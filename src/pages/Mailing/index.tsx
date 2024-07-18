import { MailingForm } from '@/components'
import AdminLayout from '@/layout/AdminLayout'

const Mailing = () => {
	return (
		<AdminLayout>
			<div className='container'>
				<MailingForm />
			</div>
		</AdminLayout>
	)
}

export default Mailing
