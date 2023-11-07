function isEmail(email) {
    var emailFormat = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    if (email !== "" && email.match(emailFormat)) {
      return true;
    }
  
    return false;
  }
  
  console.log("Email : ", isEmail("1234.testing"));
  console.log("Email : ", isEmail("vishi.in"));
  console.log("Email : ", isEmail("v@v.com"));
  console.log("Email : ", isEmail("vishistareddy2001@gmail.com"));
  
  function isPhoneNumber(number) {
    var numberFormat = /^\+?[0-9()-.\s]{10,20}$/;
    if (numberFormat.test(number)) {
      return true;
    }
  
    return false;
  }
  console.log("Phone Number", isPhoneNumber("9789346677"));
  console.log("Phone Number", isPhoneNumber("50q78423810"));
  console.log("Phone Number", isPhoneNumber("+1 (996)-583-0182"));
  
  function isValidDomain(domain) {
    var domainRegex =
      /^(https?|ftp):\/\/[A-Za-z0-9-]+\.[A-Za-z0-9]+(\/[A-Za-z0-9-_.]*)*$/;
    return domainRegex.test(domain);
  }
  
  var domainToCheck = "vishistareddy.me";
  if (isValidDomain(domainToCheck)) {
    console.log(domainToCheck + " is a valid domain.");
  } else {
    console.log(domainToCheck + " is not a valid domain.");
  }