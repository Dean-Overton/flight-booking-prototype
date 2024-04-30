import { styled } from '@mui/material/styles';
import Checkbox, { CheckboxProps } from '@mui/material/Checkbox';
import ChairIcon from '@mui/icons-material/Chair';

const ChairCheckedIcon = styled(ChairIcon)({
    color:"blue",
});

const ChairCheckBox = (props: CheckboxProps) => {
    return (
      <Checkbox
        checkedIcon={<ChairCheckedIcon />}
        icon={<ChairIcon />}
        {...props}
      />
    );
}
export default ChairCheckBox;