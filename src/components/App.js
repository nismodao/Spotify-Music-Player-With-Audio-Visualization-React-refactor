import React from 'react';
import APIService from './APIService';
import AppContainer from './AppContainer';


const App = () =>
	<div>
		<APIService
			render={
				(results, isError, error, fetchUrl) => (
					<div>
						<AppContainer
							results={results}
							isError={isError}
							error={error}
							fetch={fetchUrl}
						/>
					</div>
				)
			}
		/>
	</div>;

export default App;
