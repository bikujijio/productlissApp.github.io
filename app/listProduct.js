import "regenerator-runtime/runtime"

import Category from "./models/category";
import CategoryService from "./services/CategoryService";
import FirebaseConstants from "./constants/FirebaseConstants";
import ProductService from "./services/ProductService";


$(document).ready(function(){
        const categoryService = new ProductService(
            FirebaseConstants.RealTimeDB,
            'Token'
        );
        try {
            const placeholder = $('#placeholder')

            categoryService.findAllProducts().then((data) => {
               console.log(data);
              let list = ''
               for (const key in data) {
                    const element = data[key]; 
                    const {name} =element;
                    list = `
                    <tr>
                    <td>${key}</td>
                    <td>${name}</td>
                    <td>
                    <a href="editCategory.html?id=${key}">
                    <i class="fa fa-pencil" aria-hidden="true" style="color: green;"></i> 
                    edit</a> |
                    <a href="deleteCategory.html?id=${key}">
                    <i class="fa fa-trash" aria-hidden="true" style="color: red;"></i>
                    delete</a> 
                    </td>
                    </tr>
                    `
                    placeholder.append(list);
               }
            });
        } catch (error) {
            console.log(error);
        } 
});