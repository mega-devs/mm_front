import MailingForm from '../../components/MailingForm'
import AdminLayout from '../../layout/AdminLayout'

export default function Mailing() {
	return (
		<AdminLayout>
			<div className='container'>
				<MailingForm />
			</div>
		</AdminLayout>
	)
}
