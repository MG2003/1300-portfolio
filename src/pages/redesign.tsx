function Redesign(){
    return(
        <div>
             <div className = "text-8xl font-serif italic text-center">Responsive Redesign</div>
             <div className = "p-12 flex flex-col">
                <div className = "text-5xl font-bold font-sans">Website of Choice</div>
                <div className = "grid grid-cols-2 gap-5">
                    <p className = "text-xl font-mono my-4">For this assignment, I decided to critique and develop a responsive redesign for <a href = "https://fork.dev/blog/" className = "underline font-bold text-blue-500">fork.dev/blog</a>, the development blog for git Fork.
                    It's a niche piece of software I have fond memories of, and in looking through the blog page I felt there were many concering issues in the design of the page that would be interesting to address.
                    </p>
                    <img src = "./responsive/ss-1.png" className = "border-[#222848] border-2"></img>

                </div>

                <div className = "text-5xl font-bold font-sans mb-5">Design Critiques</div>
                    <div className = "grid grid-cols-2 gap-5 p-4">
                        <div>
                            <div className = "text-3xl font-bold font-sans">Extremely long webpage</div>
                            <ul className = "flex flex-col gap-2 text-xl font-mono p-4 list-disc">
                                <li>page features every blog page fully expanded</li>
                                <li>little to no separation between pages - hard to accurately navigate to article</li>
                                <li>navigation not sticky - navbar out of view for most of the experience</li>
                                <li className = "font-bold">extremely inefficient</li>
                                <li>lack of clarity between pages also leads to learnability issues</li>
                            </ul>
                        </div>
                        <div className = "p-2 flex flex-col gap-2">
                            <img src = "./responsive/ss-2.png"  className = "border-[#222848] border-2 mx-auto h-80"></img>
                            <p className = "font-mono text-xl text-center">Full screenshot of 1 blog page</p>
                        </div>

                        <div>
                        <div className = "text-3xl font-bold font-sans">Repetitive content</div>
                            <ul className = "flex flex-col gap-2 text-xl font-mono p-4 list-disc">
                                <li>clicking on article title leads to identical blog article</li>
                                <li>software download buttons at the bottom of every page</li>
                                <li>zero visual feedback on page change</li>
                                <li className = "font-bold">severe learnability issues</li>
                                <li>Not very <span className = "font-bold">memorable</span> since there's very little visual hierarchy either</li>
                            </ul>
                        </div>
                        <div className = "p-2 flex flex-col gap-2">
                            <div className = "grid grid-rows-2 gap-2">
                                <img src = "./responsive/ss-3.PNG"  className = "border-[#222848] border-2 mx-auto"></img>
                                <img src = "./responsive/ss-4.png"  className = "border-[#222848] border-2 mx-auto"></img>
                            </div>
                            <p className = "font-mono text-xl text-center">top image is initial blog page, bottom image is specific blog post, completely identical</p>
                        </div>
                        <div>
                            <div className = "text-3xl font-bold font-sans">Navigation issues</div>
                                <ul className = "flex flex-col gap-2 text-xl font-mono p-4 list-disc">
                                    <li>navigation bar doesn't provide comprehensive blog directory</li>
                                    <li>more weird navigation as clicking "recent posts" will direct to new page with expanded navbar</li>
                                    <li>general navigation issues make navigating page confusing and unlearnable</li>
                                    <li>It also mucks up the <span className = "font-bold">conceptual model</span>, as different webpages go all over the place and it's hard to form a mental map of the page</li>
                                </ul>
                            </div>
                        
                            <div className = "p-2 flex flex-col gap-2">
                            <div className = "grid grid-cols-2 gap-2">
                                <img src = "./responsive/ss-5.PNG"  className = "border-[#222848] border-2 mx-auto"></img>
                                <img src = "./responsive/ss-6.PNG"  className = "border-[#222848] border-2 mx-auto"></img>
                            </div>
                            <p className = "font-mono text-xl text-center">left image expands into a directory of the 5 most recent posts, no way to access older posts.</p>
                            <p className = "font-mono text-xl text-center">also 2 completely separate pages</p>
                        </div>
                        </div>
                        <div className = "text-3xl font-bold font-sans mb-5">Accessibility</div>
                        <div className = "text-xl font-mono">The <span className = "font-bold">WebAim WAVE</span> program points out numerous images without proper alt-text and the contrast between blue and white as the 
                            primary issues of the page. From analyzing the page, I think a massive accessibility issue would be the large amount of text on the page, 
                            making tab navigation and narration extremely difficult. Overall, I don't fully agree with some of the blue and white contrast issue the tool presents, but took that into 
                            account with my final design</div>
                    
                        <div className = "text-5xl font-bold font-sans my-5">Design and Mockup</div>
                        
                        <div className = "p-4">
                            <div className = "text-3xl font-bold font-sans mb-5">Visual Design Style Guide</div>
                            <img src = "./responsive/design2.png" className="border-[#222848] border-2"></img>
                            <div className = "p-4 flex flex-col gap-2 mb-5">
                                <div className = "text-2xl font-bold font-sans mb-2">Notes</div>
                                <ul className = "gap-2 flex flex-col text-xl font-mono list-disc">
                                    <li>switched long repetitive blog pages with smaller cards with a preview image - justification because this content works better as individual pages</li>
                                    <li>kept tagging system but made more visible</li>
                                    <li>darkened the blue tone of the original webpage to meet contrast standards</li>
                                    <li>made tag selection a concrete dropdown menu with a button</li>
                                </ul>
                            </div>

                            
                            <div className = "grid grid-cols-2 gap-2 mb-5">
                                <div>
                                    <div className = "text-3xl font-bold font-sans mb-5">Phone Mockup</div>
                                    <img src = "./responsive/phone-mockup.PNG" className = "border-[#222848] border-2"></img>
                                </div>
                                <div>
                                    <div className = "text-3xl font-bold font-sans mb-5">Tablet Mockup</div>
                                    <img src = "./responsive/tablet-mockup.png" className = "border-[#222848] border-2"></img>
                                </div>
                            </div>
                            <div className = "text-3xl font-bold font-sans my-5">Web Mockup</div>
                            <div className = "px-10 mx-auto mb-5">
                                <img src = "./responsive/web-mockup.png" className = "border-[#222848] border-2 w-full"></img>
                            </div>
                            <div className = "text-3xl font-bold font-sans mb-5">Web Mockup(Wide responsive)</div>
                            <div className = "px-10 mx-auto">
                                <img src = "./responsive/wide-mockup.png" className = "border-[#222848] border-2 w-full"></img>
                            </div>
                            
                            <div className = "text-2xl font-bold font-sans my-5">Notes</div>
                                <ul className = "gap-2 flex flex-col text-xl font-mono list-disc mb-5">
                                    <li>Flex column for smaller screens, grid view for larger screens</li>
                                    <li>Text size gradually increases for display along with padding for more centered view</li>
                                    <li>Generally, most of the sizes are consistent between mobile and tablet, but increase on larger web versions</li>
                                    <li>Footer component not shown but scales how it is outlined in design doc + extra padding for wide monitors</li>
                                </ul>
                            
                            <div className = "text-2xl font-bold font-sans my-5 text-blue-500 underline"><a href = "https://www.figma.com/design/4CHh4ksU1JevgQHGAkbgqv/1300-webpages?node-id=116-32&t=VhHustZfFvgnirIL-1">Figma link</a></div>


                            

                        </div>
                        <div className = "text-5xl font-bold font-sans mb-5">Final Webpage</div>
                            <div className = "p-4">
                            <div className = "text-2xl font-bold font-sans mb-5">Link: <a href = "https://www.figma.com/design/4CHh4ksU1JevgQHGAkbgqv/1300-webpages?node-id=116-32&t=VhHustZfFvgnirIL-1" className = "text-blue-500 underline">https://responsive-html-alpha.vercel.app/</a></div>
                            <img src = "./responsive/final-page.png" className = "border-[#222848] border-2 w-full mb-5"></img>
                            <div className = "text-2xl font-bold font-sans mb-5">Design Notes and Conclusion</div>
                            <ul className = "gap-2 flex flex-col text-xl font-mono list-disc mb-5">
                                    <li>Inspired by other engineering blogs such as <a href = "https://corp.roblox.com/newsroom?filter=engineering" className = "text-blue-500 underline">the Roblox Engineering Blog</a></li>
                                    <li>While the assignment asks for a 1-to-1 content replication, I felt the cards were appropriate because they did not cut content from the webpage as a whole and only made everything more
                                        efficient and learnable
                                    </li>
                                    <li>I was a bit frustrated by the contrast issues with the original fork blue color - I thought it was extremely appealing looking but chose a darker shade to make it more accessible</li>
                                    <li>Lowered some of the image colors from the initial design for better contrast</li>
                                    <li>Overall, I felt like I did a good job and overhauling the layout and look of the page while still maintaining the general  "apple-esque" aesthetic of the original page</li>
                                </ul>
                        </div>


                        
                
             </div>
        </div>
    )
}

export default Redesign