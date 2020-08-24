const wordGetter = (function(){
    const get = () => {
        let words;
        fetch("https://random-word-api.herokuapp.com/word?number=3", {mode: "cors"})
            .then(function(response){
                return response.json();
            })
            .then(function(response){
                words = response;
            });
  
    }

    return {
        get
    }

})();

export default wordGetter;