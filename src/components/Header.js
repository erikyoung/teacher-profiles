/* Core */
import React from 'react';



export default function Header ({styleClass}) {
 
    return (
    	<header>
    		<div className="container-fluid">
    			<div className={`row align-items-center ${styleClass}`}>
    				<div className="col text-center">
    					<h1 className="text-capitalize main-heading">
    						Find Good Teachers
    					</h1>
    				</div>
    			</div>
    		</div>
    	</header>
      
    );
  
}

Header.defaultProps = {
	styleClass: "header-hero"
};
