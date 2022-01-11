import React, { useState } from 'react';
import s from './Form.module.css';
import Recaptcha from "react-recaptcha";
import axios from 'axios';
import { render } from '@testing-library/react';

class Form extends React.Component {
  constructor (props) {
    super(props);
    this.handleForm=this.handleForm.bind(this);
    this.handleFields=this.handleFields.bind(this);
    this.handleCaptchaLoaded=this.handleCaptchaLoaded.bind(this);
    this.verifyCallback=this.verifyCallback.bind(this);
    this.state = {name: "", phone: "", email: "", comment: "", isVerified:"false"};
  }

  verifyCallback (response){
    if (response){
      this.setState({
        isVerified: true
      })
    }
  }

  handleCaptchaLoaded () {
    console.log('Captcha successfully loaded');
  }

  handleForm = e => {
    if (this.state.isVerified == true){
      axios
    .post("https://formcarry.com/s/LNO63fTKzlj", this.state, {
      headers: {Accept: "application/json"}
    })
    .then(function(response) {
      alert("Запрос отправлен!");
    })
    .catch(function(error) {
      console.log(error);
      alert("Введите данные еще раз!")
    });

    e.preventDefault();
    }
    else{
      alert('Please verify that you`re human!');
      e.preventDefault();
    }
    
  };


  handleFields = e => this.setState({ [e.target.name]: e.target.value });

    render(){
    return (
      <div>
        <form  onSubmit={this.handleForm} class="contact-message-order-support-form contact-message-form contact-form"  method="post" id="contact-message-order-support-form" accept-charset="UTF-8" >
          <div class="field--type-string field--name-field-vashe-imya field--widget-string-textfield form-group js-form-wrapper form-wrapper" id="edit-field-vashe-imya-wrapper">
            <div class="form-item js-form-item form-type-textfield js-form-type-textfield form-item-field-vashe-imya-0-value js-form-item-field-vashe-imya-0-value form-group">
              <label for="edit-field-vashe-imya-0-value" class="control-label">Ваше имя</label>

              <input onChange={this.handleFields} name="name" class="js-text-full text-full form-text form-control" type="text" id="edit-field-vashe-imya-0-value" size="60" maxlength="255" placeholder="Ваше имя" data-toggle="tooltip"  />
            </div>
          </div>
          <div class="field--type-string field--name-field-telefon field--widget-string-textfield form-group js-form-wrapper form-wrapper" id="edit-field-telefon-wrapper">
            <div class="form-item js-form-item form-type-textfield js-form-type-textfield form-item-field-telefon-0-value js-form-item-field-telefon-0-value form-group">
              <label for="edit-field-telefon-0-value" class="control-label js-form-required form-required">Телефон</label>
              <input onChange={this.handleFields} name="phone" class="js-text-full text-full form-text required form-control" type="text" id="edit-field-telefon-0-value" size="60" maxlength="255" placeholder="Телефон" required="required" aria-required="true"  data-toggle="tooltip"  />
            </div>

          </div>
          <div class="field--type-email field--name-field-e-mail field--widget-email-default form-group js-form-wrapper form-wrapper" id="edit-field-e-mail-wrapper">
            <div class="form-item js-form-item form-type-email js-form-type-email form-item-field-e-mail-0-value js-form-item-field-e-mail-0-value form-group">
              <label for="edit-field-e-mail-0-value" class="control-label js-form-required form-required">E-mail</label>
              <input onChange={this.handleFields} name="email" class="form-email required form-control" type="email" id="edit-field-e-mail-0-value" size="60" maxlength="254" placeholder="E-mail" required="required" aria-required="true"  data-toggle="tooltip"  />
            </div>
          </div>
          <div class="field--type-string-long field--name-field-vash- field--widget-string-textarea form-group js-form-wrapper form-wrapper" id="edit-field-vash-wrapper">
            <div class="form-item js-form-item form-type-textarea js-form-type-textarea form-item-field-vash--0-value js-form-item-field-vash--0-value">
              <label for="edit-field-vash-0-value" class="control-label">Ваш комментарий</label>
              <div class="form-textarea-wrapper">
                <textarea onChange={this.handleFields} class="js-text-full text-full form-textarea form-control resize-vertical" name="comment"  data-toggle="tooltip" id="edit-field-vash-0-value" rows="5" cols="60" placeholder="Ваш комментарий" ></textarea>
              </div>
            </div>

          </div>
          <div class="form-item js-form-item form-type-checkbox js-form-type-checkbox form-item-fz152-agreement js-form-item-fz152-agreement checkbox">
            <label for="edit-fz152-agreement" class="control-label option js-form-required form-required">
              <input required="required" class="form-checkbox required" type="checkbox" id="edit-fz152-agreement" name="fz152_agreement"  aria-required="true" /><span class="custom-checkbox"></span>Отправляя заявку, я даю согласие на <a href="#" target="_blank" >обработку своих персональных данных</a>.</label>
          </div>
          
          <Recaptcha
            sitekey="6LcEcjgaAAAAADrObb5moaSuqhGle2_cF3q35-_j"
            render="explicit"
            onloadCallback={this.handleCaptchaLoaded}
            verifyCallback={this.verifyCallback}
          />

          <button onClick={this.hundletuda} class="button button--primary js-form-submit form-submit btn-primary btn" type="submit" id="edit-submit" >Свяжитесь с нами</button>

        </form>

      </div>
    );
  };
}
  export default Form;