import CountryProxy from "../../components/CountryProxy";
import ProxyFrom from "../../components/ProxyFrom";
import AdminLayout from "../../layout/AdminLayout";

export default function Proxy() {
  const countries = [
    {
      id: 1,
      country: "Japan",
      session: "4124165",
      status: "Ready",
      image: "/images/coutry/japan 1.svg",
    },
    {
      id: 2,
      country: "Canada",
      session: "4124165",
      status: "Ready",
      image: "/images/coutry/canada 1.svg",
    },
    {
      id: 3,
      country: "China",
      session: "4124165",
      status: "Ready",
      image: "/images/coutry/china 1.svg",
    },
    {
      id: 4,
      country: "Indian",
      session: "4124165",
      status: "Ready",
      image: "/images/coutry/indian 1.svg",
    },
    {
      id: 5,
      country: "France",
      session: "4124165",
      status: "Ready",
      image: "/images/coutry/France 1.svg",
    },
    {
      id: 6,
      country: "Germany",
      session: "4124165",
      status: "Ready",
      image: "/images/coutry/germany 1.svg",
    },
    {
      id: 7,
      country: "USA",
      session: "4124165",
      status: "Ready",
      image: "/images/coutry/united-states 1.svg",
    },
    {
      id: 8,
      country: "United Kingdom",
      session: "4124165",
      status: "Ready",
      image: "/images/coutry/united-kingdom 1.svg",
    },
  ];

  return (
    <AdminLayout>
      <div className="container">
        <ProxyFrom />
        <CountryProxy countries={countries} />
      </div>
    </AdminLayout>
  );
}
