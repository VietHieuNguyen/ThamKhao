// Ngừng sự kiện khi nhấn vào các mục trong menu để tránh mở modal
var menuItems = document.querySelectorAll('#main-menu-23126128 li');
menuItems.forEach(function(item) {
  item.addEventListener('click', function(event) {
    event.stopPropagation(); // Ngừng sự kiện click để tránh mở modal khi nhấn vào menu
  });
});

// Mở modal khi nhấp vào ảnh trong slider
function openModal(element) {
  var modal = document.getElementById("myModal_23126128");
  var modalImg = document.getElementById("modal-img_23126128");

  // Đảm bảo modal chỉ mở khi nhấp vào ảnh trong slider
  modalImg.src = element.getElementsByTagName("img")[0].src;
  modal.style.display = "block"; // Mở modal
}

// Đóng modal khi nhấp vào nút đóng
function closeModal() {
  var modal = document.getElementById("myModal_23126128");
  modal.style.display = "none"; // Đóng modal
}

// Đóng modal khi nhấn vào nền ngoài modal
window.onclick = function(event) {
  var modal = document.getElementById("myModal_23126128");
  if (event.target == modal) {
    modal.style.display = "none"; // Đóng modal khi nhấn vào nền ngoài modal
  }
}

// Đóng modal khi nhấn phím ESC
document.addEventListener("keydown", function(event) {
  if (event.key === "Escape") {
    closeModal(); 
  }
})

window.onload = function() {
  var modal = document.getElementById("myModal_23126128");
  modal.style.display = "none"; 
};
// Xử lý tìm kiếm
var btnSearch = document.querySelector('.search-btn_23126128');
var searchBox = document.querySelector('.search-box_23126128');

btnSearch.addEventListener('click', function() {
  this.parentElement.classList.toggle('open');
  this.previousElementSibling.focus();
});

searchBox.addEventListener('input', function() {
  var query = this.value.toLowerCase();
  var products = document.querySelectorAll('.product-card_23126128');
  products.forEach(function(product) {
      var productName = product.querySelector('.product-info_23126128 h2').textContent.toLowerCase();
      if (productName.includes(query)) {
          product.style.display = 'block';
      } else {
          product.style.display = 'none';
      }
  });
});
