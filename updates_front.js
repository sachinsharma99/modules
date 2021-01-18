/**
* 2007-2021 PrestaShop
*
* NOTICE OF LICENSE
*
* This source file is subject to the Academic Free License (AFL 3.0)
* that is bundled with this package in the file LICENSE.txt.
* It is also available through the world-wide-web at this URL:
* http://opensource.org/licenses/afl-3.0.php
* If you did not receive a copy of the license and are unable to
* obtain it through the world-wide-web, please send an email
* to license@prestashop.com so we can send you a copy immediately.
*
* DISCLAIMER
*
* Do not edit or add to this file if you wish to upgrade PrestaShop to newer
* versions in the future. If you wish to customize PrestaShop for your
* needs please refer to http://www.prestashop.com for more information.
*
*  @author    PrestaShop SA <contact@prestashop.com>
*  @copyright 2007-2021 PrestaShop SA
*  @license   http://opensource.org/licenses/afl-3.0.php  Academic Free License (AFL 3.0)
*  International Registered Trademark & Property of PrestaShop SA
*
* Don't forget to prefix your containers with your own identifier
* to avoid any conflicts with others containers.
*/

var input_company = document.querySelector("#customer-form  input[name='company']");
var input_company_parent_row = document.querySelector("#customer-form  input[name='company']").parentNode.parentNode;
var input_company_optional = input_company.parentNode.nextElementSibling;

var account_type_parent_row = document.querySelector("#customer-form  input[name='account_type']").parentNode.parentElement.parentElement;

var input_account_type = document.querySelectorAll("#customer-form  input[name='account_type']");

var show_help_div = document.querySelector(".show-help");

input_account_type.forEach((item) => {
	  if(item.checked) {
	  	if(item.value == 2) {
			input_company_optional.style.display = 'none';
			input_company.required = true;
		}
	  }
});

input_account_type.forEach(input => { 
	input.addEventListener('click', function(){

		show_help_div = document.querySelector(".show-help");

		if(show_help_div) {
			show_help_div.remove();
		}

		if(this.value == 2) {
			input_company_optional.style.display = 'none';
			input_company.required = true;
		} else {
			input_company_optional.style.display = 'block';
			input_company.required = false;
		}

	});
});


var input_ok = false;

var customer_form = document.querySelector("#customer-form");

var form_submit_btn = document.querySelector("#customer-form .form-control-submit")

form_submit_btn.addEventListener('click', function(event){

	
	input_account_type.forEach((item) => {
	  if(item.checked) {
	  	//console.log(item.value);
	  	input_ok = true;
	  }
	});


	var classes = event.target.classList;

	classes.forEach((classname) => {

		if(classname == 'form-control-submit') {
			if(input_ok == false) {
				event.preventDefault();
			}
			//console.log('submit click');
		}

	});

	setTimeout(function(){
		if(input_ok == false) {

			var show_help_div = document.querySelector(".show-help");

			if(show_help_div) {
			
				show_help_div.remove();

			}

			var error_block = document.createElement('div');
			error_block.classList.add("help-block");
			error_block.classList.add("show-help");
			error_block.innerHTML = '<ul><li class="alert alert-danger">Required field</li></ul>';
			/*input_company.after(error_block);
			input_company_parent_row.classList.add("has-error");*/
			account_type_parent_row.appendChild(error_block);
		}

		if(input_ok == true) {

			if(show_help_div) {
			
				show_help_div.remove();

			}

		}

	}, 1000);


});
