import React from "react";
import { Card, CardContent, Typography } from "@mui/material";

const ShowResearch = () => {
  const checkToken = localStorage.getItem('token');
  if (!checkToken) {
    window.location.href = '/login';
  }

  return (
    <div>
      <Card>
        <CardContent>
          <Typography variant="h6" component="div">
            หัวข้องานวิจัย : Rhythmic Gymnastics Pose Accuracy Evaluation System Using YOLOv7
          </Typography>
          <Typography variant="body2" color="text.secondary">
            ความคืบหน้างานวิจัย : ดำเนินการสอบเรียบร้อย
          </Typography>
          <Typography variant="body2" color="text.secondary">
            รายละเอียดงานวิจัย : <br/>
            - วิจัยนี้ได้ผ่านการตีพิมพ์และนำเสนอผลงานการประชุมวิชาการระดับชาติ ครั้งที่ 19 
และเครือข่ายประชาชื่น ครั้งที่ 8 มีหัวข้อ "SUSTAINABILITY IN BUSINESS AND INNOVATION ความยั่งยืนในธุรกิจและนวัตกรรม" จัดขึ้นในวันที่ 12 กรกฎาคม 2567
<br/> - งานวิจัยได้รับผลตรวจสอบการคัดลอกผลงานทางวิชาการด้วยโปรแกรม Turnitin ผลตรวจ 20% ผ่านตามเกณฑ์บัณฑิตศึกษาที่กำหนดผลการตรวจไม่เกิน 20%          </Typography>

        </CardContent>
        <a href="/">Home</a>
      </Card>
    </div>
  );
};

export default ShowResearch;
