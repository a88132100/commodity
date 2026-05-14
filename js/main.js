document.addEventListener('DOMContentLoaded', () => {
    const productList = document.getElementById('product-list');
    const categoryButtons = document.getElementById('category-buttons');
    const subcategoryButtons = document.getElementById('subcategory-buttons');
    const sizeButtons = document.querySelectorAll('.size-button');

    let currentMainCategory = 'all';
    let currentSubCategory = 'all';
    let currentImageSize = 'large';
    let useSubcategory = false;

    function safeText(value, fallback = '未提供') {
        return value === undefined || value === null || value === '' ? fallback : String(value);
    }

    function createButton(label, dataName, value, active = false) {
        const button = document.createElement('button');
        button.className = `filter-button${active ? ' active' : ''}`;
        button.type = 'button';
        button.textContent = label;
        button.dataset[dataName] = value;
        return button;
    }

    function createMainCategoryButtons() {
        categoryButtons.innerHTML = '';
        categoryButtons.appendChild(createButton('全部商品', 'category', 'all', true));

        mainCategories.forEach(category => {
            categoryButtons.appendChild(createButton(category, 'category', category));
        });

        categoryButtons.querySelectorAll('.filter-button').forEach(button => {
            button.addEventListener('click', () => {
                currentMainCategory = button.dataset.category;
                currentSubCategory = 'all';

                categoryButtons.querySelectorAll('.filter-button').forEach(btn => btn.classList.remove('active'));
                button.classList.add('active');

                if (currentMainCategory !== 'all' && hasSubCategories) {
                    useSubcategory = true;
                    subcategoryButtons.hidden = false;
                    createSubCategoryButtons();
                } else {
                    useSubcategory = false;
                    subcategoryButtons.hidden = true;
                    subcategoryButtons.innerHTML = '';
                }

                renderProducts();
            });
        });
    }

    function createSubCategoryButtons() {
        subcategoryButtons.innerHTML = '';
        subcategoryButtons.appendChild(createButton('全部小分類', 'subcategory', 'all', true));

        (subCategories[currentMainCategory] || [])
            .filter(Boolean)
            .forEach(subCategory => {
                subcategoryButtons.appendChild(createButton(subCategory, 'subcategory', subCategory));
            });

        subcategoryButtons.querySelectorAll('.filter-button').forEach(button => {
            button.addEventListener('click', () => {
                currentSubCategory = button.dataset.subcategory;
                subcategoryButtons.querySelectorAll('.filter-button').forEach(btn => btn.classList.remove('active'));
                button.classList.add('active');
                renderProducts();
            });
        });
    }

    function updateLayoutClass() {
        productList.classList.remove('small-layout', 'medium-layout', 'large-layout');
        productList.classList.add(`${currentImageSize}-layout`);
    }

    function renderProducts() {
        productList.innerHTML = '';
        updateLayoutClass();

        let filteredProducts = products;

        if (currentMainCategory !== 'all') {
            filteredProducts = filteredProducts.filter(product => product.mainCategory === currentMainCategory);
        }

        if (useSubcategory && currentSubCategory !== 'all') {
            filteredProducts = filteredProducts.filter(product => product.subCategory === currentSubCategory);
        }

        if (filteredProducts.length === 0) {
            const noProducts = document.createElement('div');
            noProducts.className = 'no-products';
            noProducts.textContent = '目前沒有符合條件的商品';
            productList.appendChild(noProducts);
            return;
        }

        filteredProducts.forEach(product => {
            const productCard = document.createElement('article');
            productCard.className = 'product-card';

            const categoryDisplay = useSubcategory && product.subCategory
                ? `${safeText(product.mainCategory)} > ${safeText(product.subCategory)}`
                : safeText(product.mainCategory);

            productCard.innerHTML = `
                <div class="product-image-wrap">
                    <img src="${product.image}" alt="${safeText(product.name, '商品圖片')}" class="product-image ${currentImageSize}">
                </div>
                <div class="product-info">
                    <h3 class="product-name">${safeText(product.name)}</h3>
                    <p class="product-description">${safeText(product.description)}</p>
                    <p class="product-category">分類：${categoryDisplay}</p>
                    <div class="product-details">
                        <p class="product-weight">規格：${safeText(product.weight)}</p>
                        <p class="product-price">NT$ ${safeText(product.price, '洽詢')}</p>
                        ${product.discount ? `<p class="product-discount">${product.discount}</p>` : ''}
                    </div>
                </div>
            `;

            productList.appendChild(productCard);
        });
    }

    sizeButtons.forEach(button => {
        button.addEventListener('click', () => {
            currentImageSize = button.dataset.size;
            sizeButtons.forEach(btn => btn.classList.remove('active'));
            button.classList.add('active');
            renderProducts();
        });
    });

    createMainCategoryButtons();
    renderProducts();
});
