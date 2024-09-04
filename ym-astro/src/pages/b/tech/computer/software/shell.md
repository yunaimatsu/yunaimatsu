# Basic Patterns
```
.       # Any single character except newline
*       # Zero or more of the preceding character
+       # One or more of the preceding character
?       # Zero or one of the preceding character
^       # Start of line
$       # End of line
\       # Escape special characters
```

# Character Classes
```
[abc]   # Any single character a, b, or c
[^abc]  # Any single character except a, b, or c
[a-z]   # Any single character in the range a to z
[A-Z]   # Any single character in the range A to Z
[0-9]   # Any single digit
```

# Predefined Character Classes
```
[:alnum:]   # Alphanumeric characters
[:alpha:]   # Alphabetic characters
[:digit:]   # Digits
[:lower:]   # Lowercase letters
[:upper:]   # Uppercase letters
[:space:]   # Whitespace characters
```

# Quantifiers
```
{n}     # Exactly n occurrences
{n,}    # n or more occurrences
{n,m}   # Between n and m occurrences
```

# Grouping and Capturing
```
(...)       # Capture group
(?:...)     # Non-capturing group
\1, \2, ... # Backreferences to captured groups
```

# Alternation
```
|       # Alternation (OR)
```

# Anchors
```
\b      # Word boundary
\B      # Not a word boundary
```

# POSIX Character Classes (use inside [])
```
[[:alpha:]]     # Alphabetic characters
[[:digit:]]     # Digits
[[:alnum:]]     # Alphanumeric characters
[[:space:]]     # Whitespace characters
[[:punct:]]     # Punctuation characters
```

# Extended Regex Features (use -E with grep/sed)
```
?       # Zero or one occurrence
+       # One or more occurrences
{n}     # Exactly n occurrences
{n,}    # n or more occurrences
{n,m}   # Between n and m occurrences
```

# Lookaround Assertions (PCRE only, use -P with grep)
```
(?=...)     # Positive lookahead
(?!...)     # Negative lookahead
(?<=...)    # Positive lookbehind
(?<!...)    # Negative lookbehind
```

# Common Tools and Usage
```
grep    # Search for patterns in text
sed     # Stream editor for filtering and transforming text
awk     # Pattern scanning and processing language
```

# grep Examples
```
grep -E "pattern" file                   # Use extended regex
grep -P "pattern" file                   # Use Perl-compatible regex
grep -v "pattern" file                   # Invert match
grep -i "pattern" file                   # Case-insensitive search
grep -r "pattern" directory              # Recursive search
grep -n "pattern" file                   # Show line numbers
grep -l "pattern" files                  # List matching files
grep -c "pattern" file                   # Count matches
```

# sed Examples
```
sed -E 's/pattern/replacement/g' file    # Global substitution
sed -E 's/pattern/replacement/2g' file   # Replace from 2nd occurrence
sed -E '1,10s/pattern/replacement/' file # Replace in lines 1-10
sed -E '/start/,/end/s/pattern/replacement/' file # Replace between patterns
sed -E 's/(group1)(group2)/\2\1/' file   # Swap captured groups
```

# awk Examples
```
awk '/pattern/ {print $0}' file          # Print lines matching pattern
awk '{if ($1 ~ /pattern/) print $2}' file # Print 2nd field if 1st matches
awk 'BEGIN {FS=":"} {print $1}' file     # Set field separator and print 1st field
```

# Complex Examples
# Extract emails from text
grep -E -o '\b[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Z|a-z]{2,}\b' file

# Validate IP addresses
grep -E '^([0-9]{1,3}\.){3}[0-9]{1,3}$' file | grep -E '^(([0-9]|[1-9][0-9]|1[0-9]{2}|2[0-4][0-9]|25[0-5])\.){3}([0-9]|[1-9][0-9]|1[0-9]{2}|2[0-4][0-9]|25[0-5])$'

# Format phone numbers
sed -E 's/([0-9]{3})([0-9]{3})([0-9]{4})/(\1) \2-\3/' file

# Remove HTML tags
sed -E 's/<[^>]*>//g' file

# Extract URLs from text
grep -E -o 'https?://[^[:space:]]+' file

# Validate dates (YYYY-MM-DD format)
grep -E '^[0-9]{4}-(0[1-9]|1[0-2])-(0[1-9]|[12][0-9]|3[01])$' file

# Remove duplicate lines while maintaining order
awk '!seen[$0]++' file

# Convert camelCase to snake_case
sed -E 's/([a-z0-9])([A-Z])/\1_\L\2/g' file

# Find lines with more than 80 characters
grep -E '.{81,}' file

# Extract words between quotes
grep -E -o '"[^"]+"' file | sed -E 's/"//g'

# Validate password strength
grep -E '^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$' file