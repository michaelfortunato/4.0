# Plan going forward for Website
## Constant : Work on it 2 hours a day. 
### Goals
1. Short Term
    1. Build Background Color Transition For Page Changes - Estimate 1 Day
    2. Draw Wire Frame For About Page - Estimate 1 Day
    2. Learn Parrallax for React - Estiamte 2 Days
    3. Write In Corner Cases so behavior on user input is predictable
        i. Rewrite Transitions to Depend on Delays vs call backs
        ii. Make Grid and Other Home Page Elements immediately unmount via simple fade on match = null
            t. But simple match toggle in CSSTransitionGroup
	    tt. write lifecycle method 
		```
		componentDidUpdate(prevProps) {
			if (prevProps.match != null && this.props.match == null) {
				// do fade out
				setTimeout(this.state.setdontRenderTrue, 1500ms) //Render the component null in 1500ms
			} elseif (prevProps.match == null && this.props.match != null) {
				this.state.setDoRender()
			}
		} ```
2. Long Term (1 Month) 
	1. Build About (1 Month)
	2. Build Webserver and finish John Lafferty Project (1 Month)

### Plans
Day 1: Build BackGround Color Transition 
Day 2: Build WireFrame
Day 3: Beging Long Term Goal B. Build Webserver Write small plan for it after researching it on this day
Day 4: Address Short Term goal d.

2/10/2021 - Rewrite state variable names for home 
	isGridDone -> gridEntered
	isNameDone -> nameEntered
	homeMounted
