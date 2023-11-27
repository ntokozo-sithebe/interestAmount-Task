let results = document.querySelector('[data-output]')
let btnChange= document.querySelector('[data-change]')


function Interest(){

    let amount= +document.querySelector('[data-amount]').value
    let interest = document.querySelector('[data-interest]')

    results = amount * interest ;
      return(results.textContent)                          //`${amount} and ${interest}`

}

btnChange.addEventListener('click',Interest)
