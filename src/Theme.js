import React from 'react';
export default function Theme()
{
    var body=document.getElementsByTagName('body');
    function Dark()
    {
        body[0].style.backgroundColor="#292b2c";
        body[0].style.color="Beige";
    }
    function Light()
    {
        body[0].style.backgroundColor="Beige";
        body[0].style.color="Black";
    }
    return(
        <>
        <p class="Theme">
        SELECT THEME:
        <button type="button" onClick={Dark}>DARK</button>
        <button type="button" onClick={Light}>Light</button>
        </p>
        </>
    )
}