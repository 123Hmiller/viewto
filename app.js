const app = Vue.createApp({
data() {
    return{
        url: 'http://www.thenetninja.co.uk',
        showBooks: true,
        books: [
            { title: 'name of the wind', author: 'patrick rothfuss', img: "assets/5.png", isFav: true },
            { title: 'the way of kings', author: 'brandon sanderson',img: "assets/go.png", isFav: false },
            { title: 'the final empire', author: 'brandon sanderson', img: "assets/six.png",isFav: true },
        ]
        // title: 'The Final Empire',
        // author: 'Brandon Sanderson',
        // age: 45,
        // x: 0,
        // y: 0
    }
},
methods: {
    toggleShowBooks(){
this.showBooks = !this.showBooks
    },
    // handleEvent(e){
    //    console.log (e, e.type)
    //    if (data){
        // console.log(data)
    //    }
    // },
    // handleMousemove(e){
    // this.x = e.offsetX
    // this.y = e.offsetY
     // }
}
})

app.mount('#app');