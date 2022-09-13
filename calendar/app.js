

let CalendarWork = function(){
    
    
    let calendar = document.querySelector('.calendar')

    const month_names = ['Январь', 'Февраль', 'Март', 'Апрель', 'Май', 'Июнь', 'Июль', 'Август', 'Сентябрь', 'Октябрь', 'Ноябрь', 'Декабрь']

    isLeapYear = (year) => {
        return (year % 4 === 0 && year % 100 !== 0 && year % 400 !== 0) || (year % 100 === 0 && year % 400 ===0)
    }

    getFebDays = (year) => {
        return isLeapYear(year) ? 29 : 28
    }

    generateCalendar = (month, year) => {
        
        let selectedUserDay;
        let calendar_days = calendar.querySelector('.calendar-days')
        let calendar_header_year = calendar.querySelector('#year')

        let days_of_month = [31, getFebDays(year), 31, 30, 31, 30, 31, 31, 30, 31, 30, 31]

        calendar_days.innerHTML = ''

        let currDate = new Date()
        if (!month && month==1){ month = currDate.getMonth()}
        if (!year) year = currDate.getFullYear()
        //ReleaseDate = currDate;
        let curr_month = `${month_names[month]}`
        month_picker.innerHTML = curr_month
        calendar_header_year.innerHTML = year

        // get first day of month
        
        let first_day = new Date(year, month, 0)
        let value = 0;

        for (let i = 0; i <= days_of_month[month] + first_day.getDay() - 1; i++) {
            let day = document.createElement('div')
            day.classList.add('calendar-none-days')
            if (i >= first_day.getDay()) {
                day.classList.remove('calendar-none-days')
                day.classList.add('calendar-day-hover')
                value++;
                day.id=("dayofmnth")
                day.innerHTML = i - first_day.getDay() + 1
                day.innerHTML += `<span ></span>
                                <span></span>
                                <span></span>
                                <span></span>`
                if (i - first_day.getDay() + 1 === currDate.getDate() && year === currDate.getFullYear() && month === currDate.getMonth()) {
                    day.classList.add('curr-date')
                }
            }
            calendar_days.appendChild(day)
        }
        
        for (let i = 0; i < calendar_days.children.length; i++) {
            if (!calendar_days.children[i].classList.contains('calendar-none-days')) {
                calendar_days.children[i].addEventListener('click', () =>{
                    for (let i = 0; i < calendar_days.children.length; i++){
                        calendar_days.children[i].classList.remove('curr-date')
                    }
                    
                        calendar_days.children[i].classList.add('curr-date')
                        selectedUserDay=calendar_days.children[i].innerText
                        
                    
                    
                    
    
                    ////console.log(selectedUserDay);
                    setDateString(selectedUserDay)
                })
            }
            

            
            
        }
        
        
    }



    let month_list = calendar.querySelector('.month-list')

    month_names.forEach((e, index) => {
        let month = document.createElement('div')
        month.innerHTML = `<div data-month="${index}">${e}</div>`
        month.querySelector('div').onclick = () => {
            month_list.classList.remove('show')
            curr_month.value = index
            generateCalendar(index, curr_year.value)
        }
        month_list.appendChild(month)
    })

    let month_picker = calendar.querySelector('#month-picker')



    let currDate = new Date()
    currDate.getHours(currDate.getHours()+12)
    currDate.setDate(currDate.getDate());
    let userDataInput = currDate.toISOString().slice(0, 10);
    
    document.getElementById('date-picker-string').value=userDataInput;


    let curr_month = {value: currDate.getMonth()}
    let curr_year = {value: currDate.getFullYear()}



    generateCalendar(curr_month.value, curr_year.value)

    

    

    
    const prevMonthButton = function() {
        document.querySelector('#prev-month').onclick = () => {
            if (curr_month.value>0) {
                --curr_month.value
                generateCalendar(curr_month.value, curr_year.value)
                ////console.log(curr_month.value + " прев");
            }
            else{
                curr_month.value=11;
                curr_year.value--;
                generateCalendar(curr_month.value, curr_year.value)
                ////console.log(curr_month.value + " прев");
            }
        }
    }
    const nextMonthButton = function() {
        document.querySelector('#next-month').onclick = () => {
            if (curr_month.value<11) {
                ++curr_month.value
                generateCalendar(curr_month.value, curr_year.value)
                ////console.log(curr_month.value + " прев");
            }
            else{
                curr_month.value=0;
                curr_year.value++;
                generateCalendar(curr_month.value, curr_year.value)
                ////console.log(curr_month.value + " прев");
            }
        }
    }
    const prevYearButton = function() {
        document.querySelector('#prev-year').onclick = () => {
            --curr_year.value
            generateCalendar(curr_month.value, curr_year.value)
        }
    }
    const nextYearButton = function() {
        document.querySelector('#next-year').onclick = () => {
            ++curr_year.value
            generateCalendar(curr_month.value, curr_year.value)
        }
    }
    

    let setDateString = (daystr) =>{
        let currDate = new Date(curr_year.value, curr_month.value, daystr)
        currDate.setDate(currDate.getDate()+1)
        let userDataInput = currDate.toISOString().slice(0, 10);

        document.getElementById('date-picker-string').value=userDataInput;
    }

    


    
    prevMonthButton();
    nextMonthButton();
    prevYearButton();
    nextYearButton();
}


CalendarWork();