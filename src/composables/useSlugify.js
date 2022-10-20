export function useSlugify(){
    function slugify(text){
        let slug =  text.toLowerCase();
        // Letter "e"
        slug = slug.replace(/e|é|è|ẽ|ẻ|ẹ|ê|ế|ề|ễ|ể|ệ/gi, 'e');
        // Letter "a"
        slug = slug.replace(/a|á|à|ã|ả|ạ|ă|ắ|ằ|ẵ|ẳ|ặ|â|ấ|ầ|ẫ|ẩ|ậ/gi, 'a');
        // Letter "o"
        slug = slug.replace(/o|ó|ò|õ|ỏ|ọ|ô|ố|ồ|ỗ|ổ|ộ|ơ|ớ|ờ|ỡ|ở|ợ/gi, 'o');
        // Letter "u"
        slug = slug.replace(/u|ú|ù|ũ|ủ|ụ|ư|ứ|ừ|ữ|ử|ự/gi, 'u');
        // Letter "s"
        slug = slug.replace(/s|ş|ș/gi, 's');
        // Letter "t"
        slug = slug.replace(/t|ţ|ț/gi, 't');
        // Letter "i"
        slug = slug.replace(/i|í|î/gi, 'i');
        // Letter "d"
        slug = slug.replace(/đ/gi, 'd');
        // Trim the last whitespace
        slug = slug.replace(/\s*$/g, '');
        // Change whitespace to "_"
        slug = slug.replace(/\s+/g, '_');

        return slug;
    }

    return {slugify}
}