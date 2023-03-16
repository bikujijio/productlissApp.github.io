import "regenerator-runtime/runtime"
import FirebaseConstants from "./constants/FirebaseConstants";
import Category from "./models/category";
import CategoryService from "./services/CategoryService";


$(document).ready(function(){
    $('#save').on("click", () => {
        const categoryIdCtrl = $('#categoryId')
        const name = $('#name').val();
        const cate = new Category(null, name);
        const categoryService = new CategoryService(
            FirebaseConstants.RealTimeDB,
            'Token'
        );
        try {
            categoryService.insertCategory(cate).then((data) => {
               categoryIdCtrl.val(data);
            });
        } catch (error) {
            console.log(error);
        }
       console.log(cate)
       console.log("save click")
     });
});