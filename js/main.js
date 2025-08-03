// 當DOM完全加載後執行
document.addEventListener('DOMContentLoaded', () => {
    // 獲取產品列表容器、分類按鈕容器和尺寸按鈕容器
    const productList = document.getElementById('product-list');
    const categoryButtons = document.getElementById('category-buttons');
    const subcategoryButtons = document.getElementById('subcategory-buttons');
    const sizeButtons = document.getElementById('size-buttons');
    const useSubcategoryCheckbox = document.getElementById('use-subcategory');
    
    // 當前選中的分類、小分類和圖片尺寸
    let currentMainCategory = 'all';
    let currentSubCategory = 'all';
    let currentImageSize = 'medium'; // 預設為中等尺寸
    let useSubcategory = false; // 預設不使用小分類
    
    // 創建主分類按鈕
    function createMainCategoryButtons() {
        // 清空主分類按鈕容器
        categoryButtons.innerHTML = '';
        
        // 添加「全部」按鈕
        const allButton = document.createElement('button');
        allButton.className = 'filter-button active';
        allButton.textContent = '全部';
        allButton.dataset.category = 'all';
        categoryButtons.appendChild(allButton);
        
        // 添加各個主分類按鈕
        mainCategories.forEach(category => {
            const button = document.createElement('button');
            button.className = 'filter-button';
            button.textContent = category;
            button.dataset.category = category;
            categoryButtons.appendChild(button);
        });
        
        // 為主分類按鈕添加點擊事件
        const mainFilterButtons = categoryButtons.querySelectorAll('.filter-button');
        mainFilterButtons.forEach(button => {
            button.addEventListener('click', () => {
                // 更新當前選中的主分類
                currentMainCategory = button.dataset.category;
                currentSubCategory = 'all'; // 重置小分類選擇
                
                // 更新主分類按鈕狀態
                mainFilterButtons.forEach(btn => btn.classList.remove('active'));
                button.classList.add('active');
                
                // 如果使用小分類，則更新小分類按鈕
                if (useSubcategory) {
                    createSubCategoryButtons();
                }
                
                // 重新渲染產品列表
                renderProducts();
            });
        });
    }
    
    // 創建小分類按鈕
    function createSubCategoryButtons() {
        // 清空小分類按鈕容器
        subcategoryButtons.innerHTML = '';
        
        // 添加「全部」按鈕
        const allSubButton = document.createElement('button');
        allSubButton.className = 'filter-button active';
        allSubButton.textContent = '全部';
        allSubButton.dataset.subcategory = 'all';
        subcategoryButtons.appendChild(allSubButton);
        
        // 如果選擇了特定主分類，則顯示該主分類下的小分類
        if (currentMainCategory !== 'all' && subCategories[currentMainCategory]) {
            subCategories[currentMainCategory].forEach(subCategory => {
                const button = document.createElement('button');
                button.className = 'filter-button';
                button.textContent = subCategory;
                button.dataset.subcategory = subCategory;
                subcategoryButtons.appendChild(button);
            });
        }
        
        // 為小分類按鈕添加點擊事件
        const subFilterButtons = subcategoryButtons.querySelectorAll('.filter-button');
        subFilterButtons.forEach(button => {
            button.addEventListener('click', () => {
                // 更新當前選中的小分類
                currentSubCategory = button.dataset.subcategory;
                
                // 更新小分類按鈕狀態
                subFilterButtons.forEach(btn => btn.classList.remove('active'));
                button.classList.add('active');
                
                // 重新渲染產品列表
                renderProducts();
            });
        });
    }
    
    // 為使用小分類的複選框添加事件監聽器
    useSubcategoryCheckbox.addEventListener('change', () => {
        useSubcategory = useSubcategoryCheckbox.checked;
        
        // 顯示或隱藏小分類按鈕
        if (useSubcategory) {
            subcategoryButtons.style.display = 'flex';
            createSubCategoryButtons();
        } else {
            subcategoryButtons.style.display = 'none';
            currentSubCategory = 'all'; // 重置小分類選擇
        }
        
        // 重新渲染產品列表
        renderProducts();
    });
    
    // 渲染產品列表函數
    function renderProducts() {
        // 清空產品列表
        productList.innerHTML = '';
        
        // 根據選擇的分類過濾產品
        let filteredProducts = products;
        
        // 先按主分類過濾
        if (currentMainCategory !== 'all') {
            filteredProducts = filteredProducts.filter(product => product.mainCategory === currentMainCategory);
        }
        
        // 如果使用小分類且選擇了特定小分類，則進一步過濾
        if (useSubcategory && currentSubCategory !== 'all') {
            filteredProducts = filteredProducts.filter(product => product.subCategory === currentSubCategory);
        }
        
        // 如果沒有產品，顯示提示信息
        if (filteredProducts.length === 0) {
            const noProducts = document.createElement('div');
            noProducts.className = 'no-products';
            noProducts.textContent = '該分類下暫無產品';
            productList.appendChild(noProducts);
            return;
        }
        
        // 動態生成產品卡片並添加到頁面
        filteredProducts.forEach(product => {
            // 創建產品卡片元素
            const productCard = document.createElement('div');
            productCard.className = 'product-card';
            
            // 設置產品卡片的HTML內容
            let categoryDisplay = product.mainCategory;
            if (useSubcategory && product.subCategory) {
                categoryDisplay = `${product.mainCategory} > ${product.subCategory}`;
            }
            
            productCard.innerHTML = `
                <img src="${product.image}" alt="${product.name}" class="product-image ${currentImageSize}">
                <div class="product-info">
                    <h3 class="product-name">${product.name}</h3>
                    <p class="product-description">${product.description}</p>
                    <p class="product-category">分類: ${categoryDisplay}</p>
                    <div class="product-details">
                        <p class="product-weight">重量: ${product.weight || '未標示'}</p>
                        <p class="product-price">價格: NT$ ${product.price || '未標示'}</p>
                        ${product.discount ? `<p class="product-discount">${product.discount}</p>` : ''}
                    </div>
                </div>
            `;
            
            // 將產品卡片添加到產品列表容器
            productList.appendChild(productCard);
        });
    }
    
    // 為尺寸按鈕添加點擊事件
    const imageSizeButtons = document.querySelectorAll('.size-button');
    imageSizeButtons.forEach(button => {
        button.addEventListener('click', () => {
            // 更新當前選中的尺寸
            currentImageSize = button.dataset.size;
            
            // 更新按鈕狀態
            imageSizeButtons.forEach(btn => btn.classList.remove('active'));
            button.classList.add('active');
            
            // 更新所有圖片的尺寸類
            updateImageSizes();
        });
    });
    
    // 初始化頁面
    function initPage() {
        // 創建主分類按鈕
        createMainCategoryButtons();
        
        // 初始渲染產品列表
        renderProducts();
        
        // 如果產品有小分類，則啟用小分類複選框
        if (hasSubCategories) {
            useSubcategoryCheckbox.disabled = false;
        } else {
            useSubcategoryCheckbox.disabled = true;
            useSubcategoryCheckbox.title = "沒有可用的小分類";
        }
    }
    
    // 調用初始化函數
    initPage();
    
    // 更新所有圖片尺寸的函數
    function updateImageSizes() {
        const images = document.querySelectorAll('.product-image');
        images.forEach(img => {
            // 移除所有尺寸類
            img.classList.remove('small', 'medium', 'large');
            // 添加當前選中的尺寸類
            img.classList.add(currentImageSize);
        });
    }
    
    // 初始渲染所有產品
    renderProducts();
});