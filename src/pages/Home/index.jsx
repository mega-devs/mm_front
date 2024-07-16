import styles from './style.module.scss'
import MainOutstanding from '../../components/MainOutstanding'
import MainDelivery from '../../components/MainDelivery'
import MainReputation from '../../components/MainReputation'
import MainSending from '../../components/MainSending'
import MainUtilize from '../../components/MainUtilize'
import MainQuick from '../../components/MainQuick'
import ClientLayout from '../../layout/ClientLayout'

export default function Home() {
	return (
		<ClientLayout>
			<div className={styles.home}>
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
