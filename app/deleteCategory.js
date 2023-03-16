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
        

        categoryService.deleteCategory(id).then(data=>{
            location.href = 'listCategories.html'
        })
});