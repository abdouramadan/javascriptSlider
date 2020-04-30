// Get Slider Items
let sliderImage = document.querySelectorAll('.slider-container>img')

// Get Images Length
let slideCount = sliderImage.length

// Get Current slideDown
let currentSlide = 1

// Slide Number Element
let sliderNumberElement = document.getElementById('slide-number')

// Get Previous And Next Buttons
let nextButton = document.getElementById('next')
let prevButton = document.getElementById('prev')

// Initialize The Click Event
nextButton.onclick = () => nextSlide()
prevButton.onclick = () => prevSlide()

// Create The Main (ul) Element
let paginationElement = document.createElement('ul')

// Set Id On created (ul) Element
paginationElement.setAttribute('id', 'pagination-ul')

// create (li) Elements Based On The slideCount
for (let i = 1; i <= slideCount; i++)
{
	// Create The (li)
	let paginationItem = document.createElement('li')

	// Set Custom Attribute For The PaginationItem Elements
	paginationItem.setAttribute('data-index', i)

	// Set Item Content
	paginationItem.appendChild(document.createTextNode(i))

	// Appent Item To The Main List
	paginationElement.appendChild(paginationItem)
}

// Add The Created (paginationElement) To The indicators span
document.getElementById('indicators').appendChild(paginationElement)

// Get The New Created Element
let paginationCreaatedUl = document.getElementById('pagination-ul')

// Get Pagination Bullets
let paginationBullets = document.querySelectorAll('#pagination-ul>li')

// Loop Throught Bullets Items
for (let i = 0; i < paginationBullets.length; i++)
{
	paginationBullets[i].onclick = function() {
		// Set The currentSlide To The Data-index Of The Bullet
		currentSlide = parseInt(this.getAttribute('data-index'))

		theChecker()
	}
}

// Trigger The Checker Function
theChecker()


// Next Slide Function
function nextSlide()
{
	if (nextButton.classList.contains('disabled'))

		return false

 	else

		currentSlide++

		theChecker()
}

// Previous Slide Function
function prevSlide()
{
	if (prevButton.classList.contains('disabled'))

		return false

	else

		currentSlide = currentSlide - 1

		theChecker()
}

// Create The Checker Function
function theChecker()
{
	// Set The Slide Number
	sliderNumberElement.textContent = 'slide # ' + (currentSlide) + ' of ' + (slideCount)

	// Trigger The (removeAllActive) Function
	removeAllActive()

	// Set Active Class On Current Slide
	sliderImage[currentSlide - 1].classList.add('active')

	// Set Active Class On The Curent PaginationItem
	paginationCreaatedUl.children[currentSlide -1].classList.add('active')

	// Check If currentSlide == 1
	if (currentSlide == 1)
	{
		prevButton.classList.add('disabled')
	} else
	{
		prevButton.classList.remove('disabled')
	}

	// Check if currentSlide is The Latest
	if (currentSlide == slideCount)
	{
		nextButton.classList.add('disabled')
	} else
	{
		nextButton.classList.remove('disabled')
	}
}

// Remove All Active Classes From Images And Pagination Bullets
function removeAllActive()
{
	// Remove Active Classes From Images
	sliderImage.forEach( (img)=> {
		img.classList.remove('active')
	})

	// Remove Active Classes From Pagination Bullets
	paginationBullets.forEach( (bullet)=> {
		bullet.classList.remove('active')
	})
}

































//
