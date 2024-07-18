import {
	MainDelivery,
	MainOutstanding,
	MainQuick,
	MainReputation,
	MainSending,
	MainUtilize
} from '@/components'
import ClientLayout from '@/layout/ClientLayout'

const Home = () => {
	return (
		<ClientLayout>
			<div>
				<div className='container'>
					<MainOutstanding />
					<MainDelivery />
					<MainReputation />
				</div>
				<MainSending />
				<div className='container'>
					<MainUtilize />
					<MainQuick />
				</div>
			</div>
		</ClientLayout>
	)
}

export default Home
