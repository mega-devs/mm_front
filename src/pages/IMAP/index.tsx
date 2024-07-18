import { Chacking, ImapForm, Servers } from '@/components'
import AdminLayout from '@/layout/AdminLayout'

const Imap = () => {
	const servers = [
		{
			id: 1,
			ip: '128.52.52.123:0000',
			color: 'red',
			percent: 33
		},
		{
			id: 1,
			ip: '128.52.52.123:0000',
			color: 'green',
			percent: 33
		},
		{
			id: 1,
			ip: '128.52.52.123:0000',
			color: 'grey',
			percent: 33
		}
	]

	return (
		<AdminLayout>
			<div className='container'>
				<ImapForm />
				<Chacking />
				<Servers servers={servers} />
			</div>
		</AdminLayout>
	)
}

export default Imap
