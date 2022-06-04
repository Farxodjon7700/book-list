window.addEventListener('DOMContentLoaded', () => {
    const title = document.querySelector('#title'),
        author = document.querySelector('#author'),
        year = document.querySelector('#year'),
        btn = document.querySelector('.btn'),
        bookList = document.querySelector('#book-list'),
        book = [];
    btn.addEventListener('click', (event) => {
        event.preventDefault()
        if (title.value == '' && author.value == '' && year.value == '') {
            alert('Please input your information.')
        } else {


            const newRow = document.createElement('tr')

            const newTitle = document.querySelector('th')
            newTitle.innerHTML = title.value
            newRow.appendChild(newTitle)

            const newAuthor = document.querySelector('th')
            newAuthor.innerHTML = author.value
            newRow.appendChild(newAuthor)

            const dataYear = document.querySelector('th')
            dataYear.innerHTML = dataYear.value
            newRow.appendChild(dataYear)

            bookList.appendChild(newRow)

            title.value = ''
            author.value = ''
            year.value = ''
            for (let i = 0; i < book.length; i++) {
                                
            
            }
            book.push(
                {
                    title: author.value,
                    author: author.value,
                    year: year.value,
                }
            )
            console.log(book);
        }
    })

})

