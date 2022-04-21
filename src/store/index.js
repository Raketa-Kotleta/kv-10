var store = {
    debug: true,
    state: {
        articles: [],
    },
    add_art(value){
        let new_article = {
            id: this.state.articles[this.state.articles.length-1].id+1,
            ...value
        }
        this.state.articles.push(new_article);
        console.log(new_article.id);
    },
    change_status(id){
        this.state.articles[id-1].published = !this.state.articles[id-1].published;
    },
    parse_articles(){
        fetch('/js.json').then(response => response.json()).then(articles => this.state.articles = articles);
        console.log("fetched data");
    }
};
export default store;