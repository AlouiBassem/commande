import Api from "../Api";

const CATEGORIE_API="/categorie"

const fetchCategorie=async()=> {
return await Api.get(CATEGORIE_API);
}

export const CategorieService = {
    fetchCategorie,
    }



