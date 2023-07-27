import React from 'react'
import Navbar from './Navbar'
import meta from './mot.png'
import { Grid } from '@mui/material';
import Timer from './Timer'; 
import { MDBFooter } from 'mdb-react-ui-kit';
function MainPage() {
  return (
    <div>
      <Navbar/>
      <div class="backofmain"><br/><br/><br/>

      
      <br/>


                   <div className='top_center_logo'>
                   <br/><br/>
                   <br/><br/><br/><br/>
                    <img src={meta} className='top_logo'/>

                    <br/><br/>
                  

                   </div>

                   <div className='container'>
      <Grid container spacing={2}>
        
      <Grid item md={12} lg={12} xs={12} sm={12}>
            
      <div className='top_center_logo '>
                   <br/>



                   </div>


                   <div className='top_center_logo '>
              
                    <br/>
               


                   </div>
      <div className=' backabout'>
                   <br/><br/>
                  

                  <h2 className='tok_heada' >
                  Buy. Hold. Win.


     </h2>
                   <br/><br/>
                 
                   <p >$META: The ultimate utility token, taxing 4% to fund every 6 hour lottery rewards for holders.<br/> <br/>
Eligibility: 5,000 Tokens <br/> <br/>
Double Chances: 500,000+ Tokens</p>
                    <br/>
                   
                    <Timer />
                   
                    <br/>
                    
                   <p style={{fontSize:"25px"}}>   Lottery Wallet : <a href='https://etherscan.io/address/0x41a166032a76fe06dfdef02cbb451b6746587502'>ETHSCAN</a></p>
                    <br/>
                    
                 
                    <br/>


                   </div>
 
        
        </Grid>
        
         </Grid>

      </div>
       
                 <br/>
      <br/><br/> <br/>
      <br/><br/>
  </div>
  <br/>
      <br/><br/>
      <div className='container' id='about'><div className="promoBox "><h2 className='tok_head'>
      About Us 


      </h2>




</div>


<hr className="probox"></hr>
<p className='donep'> 

 <br/><br/>
 Welcome to Meta Millions, a memecoin lottery packed with the ultimate utility. No complicated steps or special requirements! Buy $META tokens and hold. <br/><br/> Seriously, thats it. You'll be automatically entered into the lottery that gets drawn every 6 hours.  No complicated rules, no hidden tricks - just pure and simple jackpot joy. <br/><br/> With Meta Millions, every participant has a chance to win, and each lottery presents fresh opportunities to take home some serious winnings.  Our advanced system employs cutting-edge blockchain technology to ensure the utmost security, fairness, and transparency. <br/><br/>Through our smart contract, every draw is verifiable, assuring you of a trustworthy experience.  So, what are you waiting for? Hold your $META tokens and let the fun begin!
 
<br/><br/>


</p>
</div>
      
      <br/>
      <br/><br/>

      <div className='container'><div className="promoBox "><h2 className='tok_head' id='token'>
      Tokenomics


      </h2>




</div>


<hr className="probox"></hr>
<p className='donep'>
In this token ecosystem, there is a 4% tax on buys and sales, tax is thoughtfully designed to contribute to both the holders and the overall development of the project. The tax structure is strategically divided to ensure a fair distribution of benefits. Here's how it works:   <br/><br/>

<ul>
  <li> 4% Lottery Wallet: Out of the total 4% tax, 1% from both buys and sells is allocated to a dedicated Lottery Wallet. This wallet serves as a mechanism for airdrops to token holders. Every 6 hours, the funds accumulated in the Lottery Wallet are distributed among eligible holders, rewarding their loyalty and incentivizing continued participation within the community.</li>
  <br/><br/>
  <li>1% Dev/Marketing Wallet: The remaining 1% of each transaction is directed towards a dedicated Dev and Marketing Wallet. This allocation is crucial for supporting the ongoing development of the project, as well as facilitating strategic marketing initiatives. The funds in this wallet are utilized to fund development efforts, ensure the token's growth, and drive marketing campaigns to expand its reach to new audiences.
  With a total supply of 100,000,000 tokens, this well-balanced tax distribution ensures that the token's ecosystem remains dynamic and engaging, while simultaneously contributing to its overall success. The combination of buy and sell taxes promotes responsible trading behavior, and the allocation of funds to the Lottery Wallet and the Dev and Marketing Wallet empowers both holders and developers, fostering a thriving and sustainable token community.</li>
</ul>
<br/><br/>


</p>
</div>
      
      
      <br/><br/>
      
      
      
      <div className='container'><div className="promoBox " id='func'><h2 className='tok_head'>
      Functionality


      </h2>




</div>


<hr className="probox"></hr>
<p className='donep'> The Python script we've developed conducts a periodic lottery-like distribution of Ether (ETH) to five random holders of a specified ERC-20 token contract on the Ethereum blockchain. Below is an explanation of what the script does: <br/><br/>

<ol>
  <li>Imports necessary libraries: The script imports the required libraries, including "web3" for interacting with the Ethereum blockchain, "random" for generating random numbers, "requests" for making API calls, and "time" for managing time intervals.</li>
  <br/><br/>
  <li>Setup Ethereum connection: It establishes a connection to the Ethereum network using Infura's WebSocket endpoint.</li>
  <br/><br/>
  <li>Set up account details: The user's Ethereum account address and private key are specified to execute transactions on the blockchain.</li>
  <br/><br/>
  <li>Contract details: The script requires the address of the ERC-20 token contract and an Etherscan API key for fetching holder addresses.</li>
  <br/><br/>
  <li>Fetch holder addresses: The script fetches the list of token holders from the specified ERC-20 contract using the Etherscan API.</li>
  <br/><br/>
  <li>Calculate distribution: The variable "distribution" holds the proportions in which the total Ether balance of the user's account will be distributed to the five randomly selected holders.</li>
  <br/><br/>

  <li>Loop for continuous operation: The script runs indefinitely in a loop.</li>
  <br/><br/>
  <li>Fetch holder addresses: It fetches the list of token holders from the specified ERC-20 contract using the Etherscan API.</li>

  <br/><br/>

  <li>Select five random winners: The script randomly selects five holders from the fetched addresses to be the winners of the Ether distribution. You must have a minimum of 5,000 tokens to be eligible, and those who hold 500,000 or more tokens have doubled chances to win.
 </li>


 <br/><br/>
 <li>Check available Ether balance: The script checks the total ETH balance in the user's account at the start of each round. If the balance is less than 1 ETH, it skips the round.</li>



 <br/><br/>
 <li>Distribute Ether to winners: For each winner, the script calculates the amount of ETH to be distributed based on the predefined distribution proportions. It then sends Ether transactions to each winner's address.</li>




 <br/><br/>



 <li>Transaction signing and sending: The script builds and signs transactions with the calculated amounts of ETH to be sent to the winners.</li>
 <br/><br/>




 <li>Wait for transaction to be mined: After sending each transaction, the script waits for the transaction to be mined and receives the transaction receipt.</li>

 <br/><br/>

 <li>Log transaction details: The script logs the winner's address and the amount of ETH sent to them in a file called "winners.txt", which will then be posted on Twitter.
 </li>
 <br/><br/>




 <li>Sends ETH from Lottery Wallet: The script then sends the 5 winners 75% of the Lottery Wallet total equally via MultiSender API.</li>

 <br/><br/> <li>Wait for the next round: After completing the distribution for all five winners, the script waits for 2 minutes before starting the next round of distribution.</li>
</ol>
<br/><br/>


</p>
</div>
      
      
      
      <br/><br/>

      <MDBFooter bgColor='light' className='text-center text-lg-left'>
      <div className='text-center p-3' style={{ backgroundColor: 'rgba(0, 0, 0, 0.2)' }}>
        &copy; {new Date().getFullYear()}
        <a className='text-dark' >
        &nbsp; by Meta Millions
        </a>
      </div>
    </MDBFooter>
      </div>
  )
}

export default MainPage