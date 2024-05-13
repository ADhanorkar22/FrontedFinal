import React from "react";
import AdminHeader from "../Components/commonComponents/AdminHeader";
import WebLogsArchive from "../Components/Admin/WebLogsArchive";
import MainLayout from "../layouts/MainLayout";

const data = {
  heading: "Logs Archive",
  title: "Dashboard",
  subTitle: "Logs Archive",
  message: "hello admin",
};
export default function weblogsarchive() {
  return (
    <MainLayout>
      <AdminHeader data={data} />
      <WebLogsArchive />
    </MainLayout>
  );
}
