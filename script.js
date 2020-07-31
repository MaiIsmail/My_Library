// custom Js code
let books = [
   {
      title: "book1",
      author: "John Doe",
      image: "https://edit.org/img/blog/xd3s-design-book-covers.jpg.pagespeed.ic.kxf_yj5jTN.jpg"
   },
   {
     title: "book2",
      author: "Mai Mq",
      image: "https://img.pngio.com/textpurplevioletfontgraphic-designposterbook-cover-book-covers-png-678_1082.png"
   },
   {
     title: "book3",
      author: "Ahmed Hassan",
      image: "https://www.sup.org/img/covers/med_large/pid_27850.jpg"
   },
   {
     title: "book4",
      author: "Ahmed Hassan",
      image: "https://img.monocle.com/travel/38_brussels+antwerp_front_cove-5d9b2b89d556f.jpg?w=300&h=460&g=center&q=60"
   },
   {
     title: "book5",
      author: "Ismail Sal",
      image: "https://thinkmaverick.com/wp-content/uploads/2019/06/TM-1.png"
   },
   {
     title: "book6",
      author: "Marak I.M",
      image: "https://images-na.ssl-images-amazon.com/images/I/71SLQKwNLBL.jpg"
   },
   {
     title: "book7",
      author: "Ameer Is",
      image: "https://eloquentjavascript.net/img/cover.jpg"
   },
   {
     title: "book8",
      author: "Mai Jamal",
      image: "https://d28hgpri8am2if.cloudfront.net/book_images/onix/cvr9781451636024/waking-up-9781451636024_hr.jpg"
   },
   {
     title: "book9",
      author: "Salam Moh",
      image: "https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1544179816l/43167012._SY475_.jpg"
   },
   {
     title: "book10",
      author: "Aml Tah",
      image: "https://adab-book.com/prodect/add/1586593358.%D9%85%D8%BA%D8%AA%D8%B1%D8%A8800.jpg"
   },
]
// on Window Load
window.addEventListener("Load", render_books());

function render_books(){
  books.map((item)=>{
    var book = document.createElement("div");
    book.setAttribute("class", "book");

    var book_img_container = document.createElement("div");
    book_img_container.setAttribute("class" , "book-img-container");

    var book_img = document.createElement("img");
    book_img.setAttribute("src", `${item.image}`);
    book_img.setAttribute("class" , "book-img");

    book_img_container.appendChild(book_img)

    var info_div = document.createElement("div");
    info_div.setAttribute("class", "info_div");

    var book_title = document.createElement("p");
    var title_text = document.createTextNode(`${item.title}`);
    book_title.setAttribute("class", "title");
    book_title.appendChild(title_text)

    var book_author = document.createElement("p");
    var author_text = document.createTextNode(`${item.author}`);
    book_author.setAttribute("class", "author");
    book_author.appendChild(author_text)

    info_div.appendChild(book_title);
    info_div.appendChild(book_author);

    book.appendChild(book_img_container);
    book.appendChild(info_div);

    var element = document.getElementById("bookShelf");
    element.appendChild(book);
  })  
}

// Add New Book Form 
document.getElementById("form-add").addEventListener("click", show_form);

function show_form() {
  console.log('test');
  document.getElementById("add-form").classList.toggle('show-form');
}

document.getElementById("add-book").addEventListener("click", function(event){
  event.preventDefault()
  var new_book = {
    title:document.getElementById("title").value,
    author:document.getElementById("author").value,
    image:document.getElementById("image").value
  }
  var temp = [...books];
  books = [];
  temp.push(new_book)
  books = [...temp]
  render_books(temp)
  updateDiv();
  render_books()
});
function updateDiv(){ 
  var div = document.getElementById("bookShelf");        
  while(div.firstChild) { 
      div.removeChild(div.firstChild); 
  }
}