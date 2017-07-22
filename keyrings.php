<?php
include 'layout_head.php';
        // select products from database
$query = "SELECT productsonesize.ProductID, colormaterialcombination.colName AS Color, colormaterialcombination.matName AS Material, sizes.sizeName AS Size, names.Name AS Name, productsonesize.Price AS Price, productsonesize.Image AS Image, description.Description AS Description, productsonesize.Stock AS Stock
FROM productsonesize
LEFT JOIN sizes ON productsonesize.sizeID=sizes.sizeID
LEFT JOIN colormaterialcombination ON productsonesize.colMatID=colormaterialcombination.colMatID
LEFT JOIN names ON productsonesize.nameID=names.nameID
LEFT JOIN description ON productsonesize.DescriptionID=description.descriptionID
Where productID IN (172, 174)";
 
$stmt = $con->prepare( $query );
$stmt->execute();
 
// count number of products returned
$num = $stmt->rowCount();
 
if($num>0){
  while ($row = $stmt->fetch(PDO::FETCH_ASSOC)){
    extract($row);
?>
<!-- creating new table row per record -->
<div class="cell_1">
  <div id='imageBox'>
    <img class='image' id=<?php echo $ProductID ?> src=<?php echo $Image ?> >
  </div>
  <div id='details'>
    <p class='product-id' style='display:none;'>{$ProductID}</p>
    <p id='bigFont'>{$Name} {$Size}</p><br/>
    <p><span class='info1'>Описание: </span><span class='info2' id='beige'>{$Description}</span></p>
    <p><span class='info1'>Вид материал: </span><span class='info2' id='beige'>{$Material}</span></p>
    <p><span class='info1'>Цвят: </span><span class='info2'>
      <select id='selectColor{$ProductID}' class='select{$ProductID}'>
        <option value='natural'>Натурален</option>
        <option value='black'>Черен</option>
      </select></span>
    </p>
    <p class='price{$ProductID}'>
      <span class='info1'>Цена: </span><span class='info2' id='beige'>" . number_format($Price, 2, '.' , ',') . "лв. </span>
    </p>
    <p><span class='info1'>Наличност: </span><span class='info2' id='beige'>{$Stock}</span></p><br/>
    <p><span class='info1'>&nbsp</span>
      <span class='info2' id='beige'>
        <input type='number' name='quantity' min='1' max='5' id='quantity' value='1' class='form-control' />
        <input type='submit' class='add-to-cart' value='Добави'/>
      </span>
    </p>
  </div>
</div>
<div class='pswp' tabindex='-1' role='dialog' aria-hidden='true'>
  <div class='pswp__bg'></div>
  <div class='pswp__scroll-wrap'>
    <div class='pswp__container'>
      <div class='pswp__item'></div>
      <div class='pswp__item'></div>
      <div class='pswp__item'></div>
    </div>
    <div class='pswp__ui pswp__ui--hidden'>
      <div class='pswp__top-bar'>
        <div class='pswp__counter'></div>
        <button class='pswp__button pswp__button--close' title='Close (Esc)'></button>
        <div class='pswp__preloader'>
          <div class='pswp__preloader__icn'>
            <div class='pswp__preloader__cut'>
              <div class='pswp__preloader__donut'></div>
            </div>
          </div>
        </div>
      </div>
    <div class='pswp__share-modal pswp__share-modal--hidden pswp__single-tap'>
      <div class='pswp__share-tooltip'></div> 
    </div>
    <button class='pswp__button pswp__button--arrow--left' title='Previous (arrow left)'></button>
    <button class='pswp__button pswp__button--arrow--right' title='Next (arrow right)'></button>
    <div class='pswp__caption'>
      <div class='pswp__caption__center'></div>
    </div>
  </div>
</div>
</div>
<?php }} include "layout_foot.html"; ?>
