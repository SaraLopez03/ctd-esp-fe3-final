import React from "react";


const Form = () => {
  //Aqui deberan implementar el form completo con sus validaciones

  return (
    <div>
      <form>
        <input placeholder="Full name" type="text" name="fullname" value=""/>
        <input placeholder="Email" type="email" name="email" value=""/>
        <input type="submit" value="submit"/>
      </form>
    </div>
  );
};

export default Form;
