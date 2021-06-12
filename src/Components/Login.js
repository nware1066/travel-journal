import React from 'react'

function Login() {
  return (
    <div>
      <div class="forms-wrapper">
        <label for="show-hide-forms" >&#10005;</label>
        <input type="checkbox" id="show-form" h />
        <div class="show-btns-wrapper">
            <label for="show-form" class="show-form-btn show-signup-form">Sign Up</label>
            <label for="show-form" class="show-form-btn show-login-form">Log In</label>
        </div>
        <form class="signup-form">
            <h3 class="form-heading">Sign Up</h3>
            <div class="fullname-inputs-wrapper">
                <input type="text" placeholder="First Name" />
                <input type="text" placeholder="Last Name" />
            </div>
            <input type="text" class="form-input" placeholder="Username" />
            <input type="email" class="form-input" placeholder="Email Address" />
            <input type="password" class="form-input" placeholder="Password" />
            <input type="submit" value="SIGN UP" class="form-btn" />
        </form>
        <form class="login-form">
            <h3 class="form-heading">Log In</h3>
            <input type="email" class="form-input" placeholder="Email Address" />
            <input type="password" class="form-input" placeholder="Password" />
            <input type="submit" value="LOG IN" class="form-btn" />
        </form>
      </div>
    </div>
  )
}

export default Login
