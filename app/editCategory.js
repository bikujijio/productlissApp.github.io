import "regenerator-runtime/runtime"
import FirebaseConstants from "./constants/FirebaseConstants";
import Category from "./models/category";
import CategoryService from "./services/CategoryService";
import UrlHelper from "./helpers/UrlHelper";

$(document).ready(function(){
    const categoryService = new CategoryService(
            FirebaseConstants.RealTimeDB,
            'Token'
        );
        const url = location.href;
        const urlHelper = new UrlHelper();
        const id = urlHelper.readParam(url,'id')
        const categoryIdCtrl = $('#categoryId')
        const nameCtrl = $('#name');

        categoryService.findById(id).then(data=>{
            const{name} = data;

            categoryIdCtrl.val(id);
            nameCtrl.val(name);
        })
    $('#update').on("click", () => {
        
        const cate = new Category(null, nameCtrl.val());
        
        try {
            categoryService.updateCategory(categoryIdCtrl.val(), cate).then((data) => {
             location.href = "listCategories.html";
            });
        } catch (error) {
            console.log(error);
        }
     });
});