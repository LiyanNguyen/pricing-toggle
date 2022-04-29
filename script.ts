let priceToggleButton = document.querySelector<HTMLDivElement | any>('.toggle-button');
let whiteCircle = document.querySelector<HTMLDivElement | any>('.white-circle');
let basicPrice = document.querySelector<HTMLParagraphElement | any>('.basic-card .price');
let professionalPrice = document.querySelector<HTMLParagraphElement | any>('.professional-card .price');
let masterPrice = document.querySelector<HTMLParagraphElement | any>('.master-card .price');
let isMonthlyPrice: boolean = true;
let isAnnualPrice: boolean = false;


priceToggleButton.onclick = (): void => {

	// Switch to annual pricing
	if (isMonthlyPrice == true) {
		whiteCircle.classList.remove('animate-right');
		whiteCircle.classList.add('animate-left');
		isMonthlyPrice = false;
		isAnnualPrice = true;
		basicPrice.innerHTML = `<small>&dollar;</small>199.99`;
		professionalPrice.innerHTML = `<small>&dollar;</small>249.99`;
		masterPrice.innerHTML = `<small>&dollar;</small>399.99`;
	}

	// Switch to monthly pricing
	else if (isAnnualPrice == true) {
		whiteCircle.classList.remove('animate-left');
    whiteCircle.classList.add('animate-right');
    isMonthlyPrice = true;
		isAnnualPrice = false;
		basicPrice.innerHTML = `<small>&dollar;</small>19.99`;
    professionalPrice.innerHTML = `<small>&dollar;</small>24.99`;
    masterPrice.innerHTML = `<small>&dollar;</small>39.99`;
  }
}