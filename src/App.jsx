import './App.css';
import Login from './pages/Login';
import LoginForm from './pages/Login/loginform';
import { Main, Bonus, BonusSun, Card, CardSun, LotteryNot, DiscordNot, TaskAComplete, TaskBComplete, TaskCComplete, GachaBuy, GachaSuccess, GachaFail, Setting, ResetSetting, PoorConnect, Awake } from './pages/Home';
import { TaskInput, TaskModify, TaskComplete, TaskProgress, TaskFail } from './pages/Task';
import { Room, Ticket, TicketEncy, TicketEmpty, TicketFilter, AwakeCharacter } from './pages/Character';
import { GachaRoom, GachaOne, GachaTen } from './pages/Gacha';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { BattleMain, Battle, ResultWin } from './pages/Battle';
import { ClainMain, PartSelection, CreateSelection, PartCategory, Sort, ClanDescription } from './pages/Clain';
import { MainMember, ClanLeader, MemberDetail, QuitMember, Dissolve, Explusion } from './pages/ClanMember';
import { First, Second, Third, Fourth, Fifth, Sixth, Seventh, Eighth, Nineth, Tenth, Eleventh } from './pages/Tutorial';
import { JobCards, CardDesc } from './pages/Cards';

function App() {

  return (
    <Router>
      <Routes>
        <Route path='/' element={<Login />} />
        <Route path='/login' element={<LoginForm />} />
        <Route path='/home' element={<Main />} />
        <Route path='/bonus' element={<Bonus />} />
        <Route path='/bonus-sun' element={<BonusSun />} />
        <Route path='/card-today' element={<Card />} />
        <Route path='/card-sun' element={<CardSun />} />
        <Route path='/lottery-not' element={<LotteryNot />} />
        <Route path='/discord-not' element={<DiscordNot />} />
        <Route path='/task-a-complete' element={<TaskAComplete />} />
        <Route path='/task-b-complete' element={<TaskBComplete />} />
        <Route path='/task-c-complete' element={<TaskCComplete />} />
        <Route path='/gacha-buy' element={<GachaBuy />} />
        <Route path='/gacha-success' element={<GachaSuccess />} />
        <Route path='/gacha-fail' element={<GachaFail />} />
        <Route path='/setting' element={<Setting />} />
        <Route path='/reset-setting' element={<ResetSetting />} />
        <Route path='/task-input' element={<TaskInput />} />
        <Route path='/task-modify' element={<TaskModify />} />
        <Route path='/task-complete' element={<TaskComplete />} />
        <Route path='/character-room' element={<Room />} />
        <Route path='/room-ticket' element={<Ticket />} />
        <Route path='/ticket-ency' element={<TicketEncy />} />
        <Route path='/ticket-empty' element={<TicketEmpty />} />
        <Route path='/ticket-filter' element={<TicketFilter />} />
        <Route path='/gacha-room' element={<GachaRoom />} />
        <Route path='/gacha-one' element={<GachaOne />} />
        <Route path='/gacha-ten' element={<GachaTen />} />
        <Route path='/battle-main' element={<BattleMain />} />
        <Route path='/battle' element={<Battle />} />
        <Route path='/result-win' element={<ResultWin />} />
        <Route path='/clain-main' element={<ClainMain />} />
        <Route path='/part-selection' element={<PartSelection />} />
        <Route path='/create-selection' element={<CreateSelection />} />
        <Route path='/part-category' element={<PartCategory />} />
        <Route path='/sort' element={<Sort />} />
        <Route path='/clan-desc' element={<ClanDescription />} />
        <Route path='/clan-member' element={<MainMember />} />
        <Route path='/clan-leader' element={<ClanLeader />} />
        <Route path='/member-detail' element={<MemberDetail />} />
        <Route path='/quit-member' element={<QuitMember />} />
        <Route path='/dissolve' element={<Dissolve />} />
        <Route path='/explusion' element={<Explusion />} />
        <Route path='/task-progress' element={<TaskProgress />} />
        <Route path='/task-fail' element={<TaskFail />} />
        <Route path='/poor-connect' element={<PoorConnect />} />
        <Route path='/awake' element={<Awake />} />
        <Route path='/awake-character' element={<AwakeCharacter />} />
        <Route path='/first-tutorial' element={<First />} />
        <Route path='/second-tutorial' element={<Second />} />
        <Route path='/third-tutorial' element={<Third />} />
        <Route path='/fourth-tutorial' element={<Fourth />} />
        <Route path='/fifth-tutorial' element={<Fifth />} />
        <Route path='/sixth-tutorial' element={<Sixth />} />
        <Route path='/seventh-tutorial' element={<Seventh />} />
        <Route path='/eighth-tutorial' element={<Eighth />} />
        <Route path='/nineth-tutorial' element={<Nineth />} />
        <Route path='/tenth-tutorial' element={<Tenth />} />
        <Route path='/eleventh-tutorial' element={<Eleventh />} />
        <Route path='/jobcard' element={<JobCards />} />
        <Route path='/carddesc' element={<CardDesc />} />
      </Routes>
    </Router>
  )
}

export default App
