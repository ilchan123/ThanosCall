import { useState } from "react"
import DropdownButton from "./dropdown_button"

const DropdownButtonGroup = () => {
  const [selectedConsultant, setSelectedConsultant] = useState("상담자")
  const [selectedCategory, setSelectedCategory] = useState("카테고리")
  const [selectedStatus, setSelectedStatus] = useState("완료 여부")

  // 임시 데이터
  const consultants = ["이종민 매니저", "김민수 팀장", "박서준 대표"]
  const categories = ["제품", "서비스", "기타"]
  const statuses = ["완료", "진행 중", "보류"]

  return (
    <div style={styles.container}>
      <DropdownButton
        options={consultants}
        onSelect={setSelectedConsultant}
        defaultLabel={selectedConsultant}
      />
      <DropdownButton
        options={categories}
        onSelect={setSelectedCategory}
        defaultLabel={selectedCategory}
      />
      <DropdownButton
        options={statuses}
        onSelect={setSelectedStatus}
        defaultLabel={selectedStatus}
      />
    </div>
  )
}

const styles = {
  container: {
    display: "flex",
    gap: "65px",
    backgroundColor: "var(--blue500)",
    padding: "10px",
    borderRadius: "8px",
    justifyContent: "center",
  },
}

export default DropdownButtonGroup
