import { useState } from "react"
import DropdownButton from "./dropdown_button"
import { STRINGS } from "../../config/string"

const DropdownButtonGroup = () => {
  const [selectedConsultant, setSelectedConsultant] = useState(
    STRINGS.CS_LIST_MANAGE.DROPDOWN_BUTTON_GRP.CONSULTER
  )
  const [selectedCategory, setSelectedCategory] = useState(
    STRINGS.CS_LIST_MANAGE.DROPDOWN_BUTTON_GRP.CATEGORY
  )
  const [selectedStatus, setSelectedStatus] = useState(
    STRINGS.CS_LIST_MANAGE.DROPDOWN_BUTTON_GRP.COMPLETE_CHECK
  )
  const consultants = [
    STRINGS.CS_LIST_MANAGE.DROPDOWN_BUTTON_GRP.CONSULTANTS.CONSULTANT1,
    STRINGS.CS_LIST_MANAGE.DROPDOWN_BUTTON_GRP.CONSULTANTS.CONSULTANT2,
    STRINGS.CS_LIST_MANAGE.DROPDOWN_BUTTON_GRP.CONSULTANTS.CONSULTANT3,
  ]
  const categories = [
    STRINGS.CS_LIST_MANAGE.DROPDOWN_BUTTON_GRP.CATEGORIES.CATE1,
    STRINGS.CS_LIST_MANAGE.DROPDOWN_BUTTON_GRP.CATEGORIES.CATE2,
  ]
  const statuses = [
    STRINGS.CS_LIST_MANAGE.DROPDOWN_BUTTON_GRP.STATUES.STATUE1,
    STRINGS.CS_LIST_MANAGE.DROPDOWN_BUTTON_GRP.STATUES.STATUE2,
  ]

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
