import React,{useState} from 'react'

const FaqSection = () => {
    const  [selected, setSelected] = useState(false) 
    const toggle = (i) =>{
        if(selected === i){
            return setSelected(null)
        }
        setSelected(i)
    }
  return (
  <div>
     <div className='flex justify-center py-10 mt-20 '>
    <img src='assets/images/divider-01.svg' className='lg:w-[6%] w-[20%]'/>
    </div>
    <div className='text-white text-[55px] font-bold flex justify-center mt-20'>Asked Questions</div>
  
    <div className="w-[60%] m-auto bg-[#1b1229] mt-20 rounded-2xl px-10 py-6">
        <div className="section-header section-header--middle">
            <div className="section-header__content">
                
          
    </div>
    </div>
    <div className='faqs'>
    <div className='Content'>
        {data.map((item ,i) => (
            <div className='item'>
            <div className='title' key={i}onClick={() => toggle(i)}>
            <h5 className='text-white text-[20px] font-bold'>{item.title}</h5>
        <span>{selected === i? '-':'^'}</span>
            </div>
           <div className={selected === i? 'content1 show':'content1'}>
            <p className='text-gray-400 font-semibold'> {item.content}</p>
           </div>
                
            </div>
            
        ))}
        
    </div>
    </div>
    </div>
    </div>

   
  )
}

export default FaqSection


const data = [
    {
    "title": "What is Nerko's NFT Collection?",
    "content": " is a platform that allows the everyday person to buy, sell and invest in rare multimillion-dollar timepieces in the same way you would buy a share. This is achieved through the fractionalization of our asset-backed NFTs."
    
},
{
"title": "How we can buy and invest NFT?",
"content": "The minimum trade size is $20 or currency equivalent."
},{
    "title": "Why we should choose Nerko's NFT?",
    "content": "To purchase token in the presale, we accept ETH, USDT or you can pay via credit or debit card. You will be able to purchase watch-backed NFTs using the following currencies: BTC ETH, USDT, USDC, BSC, SHIB, DOGE, UNI"
},
{
    "title": "Where we can buy and sell NFts?",
    "content": "The waitlist for our beta version of the marketplace will be available for a maximum of 500 users."
},{
    "title": "How secure is this token?",
    "content":"Yes, all watches on the beta version of our platform will be available for physical delivery."
},
{
"title": "What is your contract address?",
"content": "Yes, you can redeem the watch out of our vault if you hold 100% of the watch NFTs."
},

]