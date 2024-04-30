import { getTopNews } from "../apiQuery";

export default function SearchBar() {
  return (
    <FormControl>
      <FormLabel></FormLabel>
      <OutlinedInput
        placeholder="Search"
        endAdornment={
          <IconButton onClick={() => getTopNews()}> {/* remember the parameters for the TOP NEWS stories is country, category, and keyword  */}
            <SearchSharpIcon />
          </IconButton>
        }
      ></OutlinedInput>
      <FormHelperText></FormHelperText>
    </FormControl>
  );
}
