import Hand from '../../assets/img/hand.svg'
import Money from '../../assets/img/money.svg'
import './home.css'

const Home = (props) => {
    return (
        <div className={`home ${props.theme ? 'dark-home-page' : 'light-home-page'}`}>
            <div className="first-article d-flex justify-content-around">
                <div className="d-flex justify-content-end col-7"><div className={`col-9 ${props.theme ? 'dark-home-avatar' : 'light-home-avatar'}`} /><div className='col-1' /></div>
                <div className="col-5">
                    <p className={`home-font1 first-article-topic ${props.theme ? 'dark-home-topic' : 'light-home-topic'}`}>MoneyDefiSwap</p>
                    <p className={`home-font2 first-article-explain ${props.theme ? 'dark-home-explain' : 'light-home-explain'}`}>Together to the future with MoneydefiSwap $MSD> </p>
                    <p className={`home-font3 first-article-content ${props.theme ? 'dark-home-content' : 'light-home-content'}`}>$MSD also aims to bring businesses and developers together to solve real-world problems with the shared values of transparency, fee-less transaction, social and economic inclusion, environmental sustainability.</p>
                    <button className={`btn-home-trade pointer ${props.theme ? 'dark-home-trade' : 'light-home-trade'}`}>TRADE NOW</button>
                </div>
            </div>
            <div className="second-article d-flex justify-content-between">
                <div className="col-sm-1" />
                <div className="col-sm-10">
                    <p className={`home-font1 second-article-topic ${props.theme ? 'dark-home-topic' : 'light-home-topic'}`}>MoneyShow MoneyShow ($MYS)</p>
                    <p className={`home-font3 second-article-content ${props.theme ? 'dark-home-content' : 'light-home-content'}`}>is a new Defi utility deflationary token built on the Binance Smart Chain network. And it is the
                        governance token of MoneydefiSwap. The grand and detailed information of the token and the utility
                        platform will be revealed in subsequent post. And also, have you been thinking or asking yourself on how to
                        maximize your profits on holding MSD, a new staking pool has now been opened on the MoneydefiSwap
                        decentralized platform. This gives you an opportunity to stake your MSD to earn MYS, once you have staked your
                        assets you'll be earning staking rewards on it and grow them further by compounding those future rewards, Stake
                        your MSD today to start earning the future gem in MYS.</p>
                </div>
                <div><img src={Hand}></img></div>
            </div>
            <div className="third-article d-flex justify-content-center">
                <div className="d-flex justify-content-center col-7"><img src={Money}></img></div>
                <div className="col-5">
                    <p className={`home-font1 third-article-topic ${props.theme ? 'dark-home-topic' : 'light-home-topic'}`}>Together to the future</p>
                    <p className={`home-font3 third-article-content ${props.theme ? 'dark-home-content' : 'light-home-content'}`}>MoneydefiSwap is an innovative BEP-20 token that uses complex
                        algorithms to generate automatic gas-less yield rewards, rewards, incentivizes
                        holding while stabilizing the price through automatically generating
                        liquidity, providing an unbreakable price floor.<br />
                        <br />

                        What makes MoneydefiSwap truly Money shot growing up is the
                        the automatic market-making mechanism that guarantees an ever-lasting
                        baseline liquidity (basically a price floor) that inches higher on each trade
                        executed.</p>
                </div>
            </div>
        </div>
    )
}

export default Home;