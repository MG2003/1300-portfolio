function App() {

  return (
    <div className = "mx-60 my-10">
      <div className = "text-8xl font-serif italic text-center">Personas and Storyboarding</div>
      <div className = "p-12 flex flex-col">
        <div className = "text-3xl font-bold font-sans">Model Diagram</div>
        <div>
          <img src = "./assets/diagrm.png"></img>
          <p className = "text-xl font-mono my-4">The CIT vending machine functions like most other vending machines at Brown University, featuring rows of snacks ID’d by a letter and a number. To operate, the user first pays the machine either with cash or, more popularly with credit/debit or flex points. To use the former they input cash into the compartment directly under the keypad. For the latter, they must access the swipe register located near the bottom of the machine. Following this, they can input a snack code using the keypad which has tactile buttons. Upon completion, their item is vended, if available.</p>
        </div>
        <div className = "text-3xl font-bold font-sans">Interviews</div>
            <ol className = "list-decimal py-4 px-10 gap-10 flex-col flex text-xl">
              <li>
                <div className = "font-bold">How often do you use this vending machine?</div>
                <ul className = "p-4 text-lg">
                  <li>Once every 2 or 3 weeks</li>
                  <li>Not very often</li>
                  <li>Once or twice a week</li>
                </ul>
                Overall, the responses to this show that the CIT vending machine doesn't have that many visitors. This question is simply
                  meant to gauge how much these users think about this machine.

              </li>
              <li>
                <div className = "font-bold"> What would you change about the interface of this vending machine?</div>
                <ul className = "p-4 text-lg">
                  <li>Make the opening compartment bigger
                  </li>
                  <li>Move the swipe access up a bit</li>
                  <li>Make it feel a bit more responsive after I swipe my card</li>
                </ul>
                The responses to this question varied, each person had their own issues with the vending machine
              </li>
              <li>
                <div className = "font-bold">How does this vending machine compare to others you have used in the past?</div>
                <ul className = "p-4 text-lg">
                  <li>I like that the buttons are extremely tactile and responsive</li>
                  <li>I rarely use vending machines so I can’t answer this too well</li>
                  <li>Sometimes my snack gets stuck in the machine</li>
                </ul>
                A lot of users struggled to answer this question because my interviewees don't seem to use the vending machine a lot,
                but the responses varied from generally positive to small gripes
              </li>
              <li>
                <div className = "font-bold">From a scale of 1-5, how would you rate your experience with this vending machine?</div>
                <ul className = "p-4 text-lg">
                  <li>4</li>
                  <li>2</li>
                  <li>3</li>
                </ul>
                Pretty uninformative answer overall, but generally it seems like an average or so vending machine
              </li>
              <li>
                <div className = "font-bold">Do you have any frustrations about the vending machine?</div>
                <ul className = "p-4 text-lg">
                  <li>The opening compartment is too small and hard to grip</li>
                  <li>The swipe access is way too low and difficult to access</li>
                  <li>I’m not always sure my transaction is completed because sometimes it prompts me to select a second snack</li>
                </ul>
                This was pretty easy for users to answer, and overall the machine seems to have some issues with responsiveness
              </li>
            </ol>
      </div>
      <div className = "text-3xl font-bold font-sans">Observations</div>
      <ol className = "text-xl flex flex-col p-4 gap-4">
        <li>Overall, most users select their snack before deciding on a snack to buy</li>
        <li>Users pay a lot of attention to grabbing the food after the meal is dispensed</li>
        <li>The user who interviewed stating that their machine sometimes got stuck paid more attention
          to the process of the snack being dispensed
        </li>
      </ol>
      <div className = "text-3xl font-bold font-sans">Personas</div>
      <div className = "grid grid-cols-2">
        <img src = "./assets/persona1.png"></img>
        <img src = "./assets/persona2.png"></img>
      </div>
      <div className = "text-3xl font-bold font-sans">Storyboard</div>
      <div className = "text-xl p-4 font-mono">For storyboarding, I selected Jon</div>
      <div className = "grid grid-cols-3">
        <div className = "border-2 border-[#222848] w-full p-2">
          <img src = "./assets/p1.jpg" className = "w-full border-2"></img>
          <div className = "text-lg font-mono mt-2">Jon, deep in his work at 1:54AM in the CIT, decides he needs a break</div>
        </div>

        <div className = "border-2 border-[#222848] w-full p-2">
          <img src = "./assets/p2.jpg" className = "w-full border-2"></img>
          <div className = "text-lg font-mono mt-2">He makes his way down to the CIT vending machine and looks at the options, trying to decide what he wants</div>
        </div>
        <div className = "border-2 border-[#222848] w-full p-2">
          <img src = "./assets/p3.jpg" className = "w-full border-2"></img>
          <div className = "text-lg font-mono mt-2">He finally decides on some Cheez-its</div>
        </div>
        <div className = "border-2 border-[#222848] w-full p-2">
          <img src = "./assets/p4.jpg" className = "w-full border-2"></img>
          <div className = "text-lg font-mono mt-2">Tired, Jon fumbles around with the swipe register a bit, frustrated by its height</div>
        </div>
        <div className = "border-2 border-[#222848] w-full p-2">
          <img src = "./assets/p5.jpg" className = "w-full border-2"></img>
          <div className = "text-lg font-mono mt-2">After it goes through, he inputs the code for the cheez-its</div>
        </div>
        <div className = "border-2 border-[#222848] w-full p-2">
          <img src = "./assets/p6.jpg" className = "w-full border-2"></img>
          <div className = "text-lg font-mono mt-2">He takes the cheez-its from the compartment, struggling a bit with the opening</div>
        </div>
        <div className = "border-2 border-[#222848] w-full p-2">
          <img src = "./assets/p7.jpg" className = "w-full border-2"></img>
          <div className = "text-lg font-mono mt-2">Jon enjoys his snack</div>
        </div>
        
      </div>
    </div>
  )
}

export default App
