console.log("This is JS FIle");

////Only Discount By Pressing Button
const Button_1=document.getElementById('btn1');
const Result1=document.getElementById('Result1');
const Result1_Price=document.getElementById('Result1_Price');
const PreviousPrice1=document.getElementById('previousprice_1');

Result1.style.display='none';

function FinalPrice(Amount){
    const finalprice=Amount-((Amount*30)/100);
    return finalprice;
}

Button_1.addEventListener('click',function(){
    console.log("Press This Button");
    const PreviousPriceString=PreviousPrice1.innerText;
    const PreviousPriceAmount=parseFloat(PreviousPriceString);
   // console.log("Previous Price: "+PreviousPriceAmount+" Data type: "+typeof PreviousPriceAmount);
    const Price=FinalPrice(PreviousPriceAmount);
   // console.log("Final Price: "+Price);
   Result1.style.display='block';
   Result1_Price.innerText=Price;
})



/////Discount by coupon Code
const ApplyButton=document.getElementById('btn2');
const CouponBox=document.getElementById('couponboxid');
const Result2=document.getElementById('Result2');
const Result2_Price=document.getElementById('Result2_Price');
const PreviousPrice2=document.getElementById('previousprice_2');
const AlertMessage=document.getElementById('alertmessageid');

Result2.style.display='none';
AlertMessage.style.display='none';

CouponBox.addEventListener('keyup',function(e){
    console.log(e.target.value);
})

ApplyButton.addEventListener('click',function(){
    const PreviousPriceString=PreviousPrice2.innerText;
    const PreviousPriceAmount=parseFloat(PreviousPriceString);

    const CouponBoxText=CouponBox.value;
    if(CouponBoxText==="DISC30"){
        const Price=FinalPrice(PreviousPriceAmount);
        Result2.style.display='block';
        Result2_Price.innerText=Price;
        AlertMessage.style.display='none';
    }
    else if(CouponBoxText===""){
        Result2.style.display='block';
        Result2_Price.innerText=PreviousPriceString;

        AlertMessage.style.display='block';
        AlertMessage.style.backgroundColor='tomato';
        AlertMessage.innerText="You didn't give any code";
    }

    else if(CouponBoxText!=="DISC30"){
        alert("Wrong Coupon Code");
        Result2.style.display='block';
        Result2_Price.innerText=PreviousPriceString;

        AlertMessage.style.display='block';
        AlertMessage.style.backgroundColor='red';
        AlertMessage.innerText="Wrong Coupon code";
    }
    //console.log("Coupon Box Text: "+CouponBoxText);
})

//////Discount By Coupon Code end



/////Text Editor Start
const TextForm=document.getElementById('textareaid');
const BoldButton=document.getElementById('boldid');
const ItalicButton=document.getElementById('italicid');
const UnderLineButton=document.getElementById('underlineid');
const Text_Start_Button=document.getElementById('text_start_id');
const Text_Center_Button=document.getElementById('text_center_id');
const Text_Right_Button=document.getElementById('text_right_id')
const Text_Justify_Button=document.getElementById('text_justify_id');

const Text_Size_Button=document.getElementById('text_size_id');
const Text_Color_button=document.getElementById('text_color_id')


BoldButton.addEventListener('click',function(){
    const Text=TextForm.value;
   

    const CLASSLIST=BoldButton.classList;
    if(CLASSLIST.contains("ActiveClass")){
        BoldButton.classList.remove("ActiveClass");
        TextForm.style.fontWeight='normal';
    }else{
        BoldButton.classList.add("ActiveClass"); 
        TextForm.style.fontWeight='bold';
    }
    console.log(CLASSLIST);
})

ItalicButton.addEventListener('click',function(){
    const CLASSLIST=ItalicButton.classList;
    if(CLASSLIST.contains("ActiveClass")){
        ItalicButton.classList.remove("ActiveClass");
        TextForm.style.fontStyle='';
    }else{
        ItalicButton.classList.add("ActiveClass"); 
        TextForm.style.fontStyle='italic';
    }

    
})
UnderLineButton.addEventListener('click',function(){
    const CLASSLIST=UnderLineButton.classList;
    if(CLASSLIST.contains("ActiveClass")){
        UnderLineButton.classList.remove("ActiveClass");
        TextForm.style.textDecoration='none'
    }else{
        UnderLineButton.classList.add("ActiveClass"); 
        TextForm.style.textDecoration='underline'
    }

    
})

Text_Start_Button.addEventListener('click',function(){
    TextForm.style.textAlign='left';
    Text_Start_Button.classList.add("ActiveClass");

    Text_Center_Button.classList.remove("ActiveClass");
    Text_Right_Button.classList.remove("ActiveClass");
    Text_Justify_Button.classList.remove("ActiveClass");
})
Text_Center_Button.addEventListener('click',function(){
    TextForm.style.textAlign='center';
    Text_Center_Button.classList.add("ActiveClass");

    Text_Start_Button.classList.remove("ActiveClass");
    Text_Right_Button.classList.remove("ActiveClass");
    Text_Justify_Button.classList.remove("ActiveClass");
})
Text_Right_Button.addEventListener('click',function(){
    TextForm.style.textAlign='right';
    Text_Right_Button.classList.add("ActiveClass");

    Text_Start_Button.classList.remove("ActiveClass");
    Text_Center_Button.classList.remove("ActiveClass");
    Text_Justify_Button.classList.remove("ActiveClass");
})
Text_Justify_Button.addEventListener('click',function(){
    TextForm.style.textAlign='justify';
    Text_Justify_Button.classList.add("ActiveClass");

    Text_Start_Button.classList.remove("ActiveClass");
    Text_Center_Button.classList.remove("ActiveClass");
    Text_Right_Button.classList.remove("ActiveClass");
})

Text_Size_Button.addEventListener('mouseenter',function(){
    Text_Size_Button.setAttribute='multiple=0';
})
Text_Size_Button.addEventListener('focus',function(){
    Text_Size_Button.classList.add('text_size_box');
    
})

Text_Size_Button.addEventListener('focusout',function(){
    Text_Size_Button.classList.remove('text_size_box');
})

/////Text Size start   this is mainnnnnnnnnnnnnnnnnnnnnnnnnnnn
Text_Size_Button.addEventListener('change',function(e){
    const Value=e.target.value;
    console.log("Text Size Value: "+Value);
    TextForm.style.fontSize=Value+"px";
   
})
///Text Size end

Text_Color_button.addEventListener('input',function(event){
    const Color=event.target.value;
    console.log("COLOR: "+Color)
    TextForm.style.color=Color;
})