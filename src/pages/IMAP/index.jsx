import Chacking from "../../components/Chacking";
import ImapForm from "../../components/ImapForm";
import Servers from "../../components/Servers";
import AdminLayout from "../../layout/AdminLayout";

export default function Imap() {
  const servers = [
    {
      id: 1,
      ip: "128.52.52.123:0000",
      color: "red",
      percent: 33,
    },
    {
      id: 1,
      ip: "128.52.52.123:0000",
      color: "green",
      percent: 33,
    },
    {
      id: 1,
      ip: "128.52.52.123:0000",
      color: "grey",
      percent: 33,
    },
  ];

  return (
    <AdminLayout>
      <div className="container">
        <ImapForm />
        <Chacking />
        <Servers servers={servers} />
      </div>
    </AdminLayout>
  );
}
