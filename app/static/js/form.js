//DOM elements
const DOMstrings = {
  stepsBtnClass: 'multisteps-form__progress-btn',
  stepsBtns: document.querySelectorAll(`.multisteps-form__progress-btn`),
  stepsBar: document.querySelector('.multisteps-form__progress'),
  stepsForm: document.querySelector('.multisteps-form__form'),
  stepsFormTextareas: document.querySelectorAll('.multisteps-form__textarea'),
  stepFormPanelClass: 'multisteps-form__panel',
  stepFormPanels: document.querySelectorAll('.multisteps-form__panel'),
  stepPrevBtnClass: 'js-btn-prev',
  stepNextBtnClass: 'js-btn-next',
};

//remove class from a set of items
const removeClasses = (elemSet, className) => {
  elemSet.forEach(elem => {
    elem.classList.remove(className);
  });
};

//return exect parent node of the element
const findParent = (elem, parentClass) => {
  let currentNode = elem;
  while (!currentNode.classList.contains(parentClass)) {
    currentNode = currentNode.parentNode;
  }
  return currentNode;
};

//get active button step number
const getActiveStep = elem => {
  return Array.from(DOMstrings.stepsBtns).indexOf(elem);
};

//set all steps before clicked (and clicked too) to active
const setActiveStep = activeStepNum => {
  removeClasses(DOMstrings.stepsBtns, 'js-active'); //remove active state from all the state
  DOMstrings.stepsBtns.forEach((elem, index) => { //set picked items to active
    if (index <= activeStepNum) {
      elem.classList.add('js-active');
    }
  });
};

//get active panel
const getActivePanel = () => {
  let activePanel;
  DOMstrings.stepFormPanels.forEach(elem => {
    if (elem.classList.contains('js-active')) {
      activePanel = elem;
    }
  });
  return activePanel;
};

//open active panel (and close unactive panels)
const setActivePanel = activePanelNum => { 
  removeClasses(DOMstrings.stepFormPanels, 'js-active');  //remove active class from all the panels
  DOMstrings.stepFormPanels.forEach((elem, index) => {  //show active panel
    if (index === activePanelNum) {
      elem.classList.add('js-active');
      setFormHeight(elem);
    }
  });
};

//set form height equal to current panel height
const formHeight = activePanel => {
  const activePanelHeight = activePanel.offsetHeight + 25;
  DOMstrings.stepsForm.style.height = `${activePanelHeight}px`;
};

const setFormHeight = () => {
  const activePanel = getActivePanel();
  formHeight(activePanel);
};

//SETTING PROPER FORM HEIGHT ONLOAD
window.addEventListener('load', setFormHeight, false);

//SETTING PROPER FORM HEIGHT ONRESIZE
window.addEventListener('resize', setFormHeight, false);

//STEPS BAR CLICK FUNCTION
DOMstrings.stepsBar.addEventListener('click', e => {  
  const eventTarget = e.target; //check if click target is a step button
  if (!eventTarget.classList.contains(`${DOMstrings.stepsBtnClass}`)) {
    return;
  }
  const activeStep = getActiveStep(eventTarget);  //get active button step number
  setActiveStep(activeStep);  //set all steps before clicked (and clicked too) to active
  setActivePanel(activeStep); //open active panel
});

// NEXT AND PREV BUTTONS WITH VALIDATION
$('.js-btn').click(function(event) {
  const target = event.target;
  const activePanel = findParent(target, `${DOMstrings.stepFormPanelClass}`);
  let activePanelNum = Array.from(DOMstrings.stepFormPanels).indexOf(activePanel);

  if (target.classList.contains('js-prev')){
    activePanelNum--;
  }else {
    let form = $("#main-form");
    form.validate({
      rules: {
        // DANE OSOBOWE
        surname: {
          required: true,
          lettersonly: true
        },
        name: {
          required: true,
          lettersonly: true
        },
        secondName: {
          required: false,
          lettersonly: true
        },
        fathersName: {
          required: true,
          lettersonly: true
        },
        mothersName: {
          required: true,
          lettersonly: true
        },
        birthDate: {
          required: true
        },
        birthPlace: {
          required: true,
          lettersonly: true
        },
        familyName: {
          required: false,
          lettersonly: true
        },
        citizenship: {
          required: true,
          lettersonly: true
        },
        pesel: {
          required: true,
          digits: true,
          exactlength: 11
        },
        nip: {
          digits: true,
          exactlength: 10
        },
        phoneNumber: {
          required: true,
          phoneRegex: true,
          exactlength: 11
        },
        email: {
          required: true,
          email: true
        },
        stayNumber: {
          required: false,
        },
        
        // ADRES ZAMIESZKANIA
        voivodship: {
          required: true,
        },
        powiat: {
          required: true,
        },
        gmina: {
          required: true,
        },
        street: {
          required: true,
        },
        houseNumber: {
          required: true,
        },
        flatNumber: {
          numLetter: true
        },
        city: {
          required: true,
          lettersonly: true
        },
        postCode: {
          required: true
        },
        post: {
          required: true,
          lettersonly: true
        },
        zusName: {
          required: true,
          lettersonly: true
        },
        zusAddress: {
          required: true
        },

        // UBEZPIECZENIE SPOLECZNE
        nfz: {
          required: true
        },
        pensioner: {
          required: true
        },
        disabled: {
          required: true
        },
        disabledLevel: {
          required: true
        },

        // POWSZECHNE UBEZPIECZENIE ZDROWOTNE
        insurance: {
          required: true
        },
        insuranceReason:{
          required: true,
          minlength: 1
        },
        workplace: {
          required: true
        },
        otherReason: {
          required: true
        },
        insuranceStatement: {
          required: true
        },
        student: {
          required: true
        },
        schoolName: {
          required: true,
          lettersonly: true
        },
        studentID: {
          required: true
        },

        // POWSZECHNE UBEZPIECZENIE SPOLECZNE
        optionalInsurance: {
          required: true
        },
        optionalInsuranceType: {
          required: true
        },

        //ZGODY
        bankName: {
          required: true
        },
        accountNumber: {
          required: true,
          digitsSpaces: true,
          exactlength: 26
        },
        statement: {
          required: true
        }
      },
    });
    if (activePanelNum == 5 && form.valid() == true){
      form.submit();
    }else if (form.valid() == true){
      activePanelNum++;
    }
  }
  setActiveStep(activePanelNum);
  setActivePanel(activePanelNum);
  scrollToTop();
  console.log("# current panel: " + activePanelNum);
});
  
//SMOOTHLY SCROLL TO TOP
function scrollToTop() {
    if (document.body.scrollTop !== 0 || document.documentElement.scrollTop !== 0) {
        window.scrollBy(0, -50);
        requestAnimationFrame(scrollToTop);
    }
}

// SHOW/HIDE NESTED ELEMENTS ON RADIO
$('.primary-field').click(function() {
  let name = this.name;
  let showElementId = name + '-' + 'show';
  let hideElementId = name + '-' + 'hide';
  let hiddenElement = '#' + name + '-nested';
  let hiddenField = name + '-nested-field';

  if (this.id == showElementId) {
      $(hiddenElement + " .hidden").hide();
      $(hiddenElement).show();
      $(hiddenField).attr('required', '');
      $(hiddenField).attr('data-error', 'To pole jest wymagane.');
  } else if (this.id == hideElementId) {
      $(hiddenElement).hide();
      $(hiddenElement + " :input[type='text']").val("");
      $(hiddenElement + " :radio, " + hiddenElement + " :checkbox").prop("checked", false);
      $('.clear').val('');
      $(hiddenField).removeAttr('required');
      $(hiddenField).removeAttr('data-error');
  }
  setFormHeight();
});

// SHOW/HIDE NESTED ELEMENTS ON CHECBOXES
$('.check-nest').click(function(){
  let id = this.id;
  let nestedElement = '#' + id + '-nested';

  if(this.checked){
      $(nestedElement).show();
  } else{
      $(nestedElement + " :input[type='text']").val("");
      $(nestedElement + " :radio, " + nestedElement + " :checkbox").prop("checked", false);
      $('.clear').val('');
      $(nestedElement).hide();
  }
  setFormHeight();
});

//INITIALIZE DATEPICKER
$('input[id="birthDate"]').daterangepicker({
    singleDatePicker: true,
    showDropdowns: true,
    minYear: 1901,
    maxYear: parseInt(moment().format('YYYY'),10),
    drops: 'up',
    "locale": {
        "format": "DD.MM.YYYY",
        "separator": ".",
        "applyLabel": "OK",
        "cancelLabel": "Anuluj",
        "weekLabel": "W",
        "daysOfWeek": [
            "Pon",
            "Wt",
            "Śr",
            "Czw",
            "Pią",
            "Sob",
            "Nie"
        ],
        "monthNames": [
            "Styczeń",
            "Luty",
            "Marzec",
            "Kwiecień",
            "Maj",
            "Czerwiec",
            "Lipiec",
            "Sierpień",
            "Wrzesień",
            "Październik",
            "Listopad",
            "Grudzień"
        ],
        "firstDay": 0
    }
});

// INITIALIZE POPOVERS
$('[data-toggle="popover"]').popover();

$('[data-toggle="popover"]').click(function (e) {
    e.preventDefault();
    $('[data-toggle="popover"]').not(this).popover('hide');
    $(this).popover('toggle');
});

$(document).click(function (e) {
    if ($(e.target).parent().find('[data-toggle="popover"]').length > 0) {
        $('[data-toggle="popover"]').popover('hide');
    }
});

$(document).ready(function(){
  $('input[id="birthDate"]').val('');
  $('input[id="birthDate"]').attr("placeholder","Data urodzenia");
  $(".clear").val('');
  
  $('#pesel').mask('00000000000');
  $('#nip').mask('0000000000');
  $('#phoneNumber').mask('000 000 000');
  $('#postCode').mask('00-000');
  $('#accountNumber').mask('00 0000 0000 0000 0000 0000 0000');
});







