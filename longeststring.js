function longestSubstring(s) {
    let set = new Set();
    let left = 0;
    let best = "";

    for (let right = 0; right < s.length; right++) {
        while (set.has(s[right])) {
            set.delete(s[left]);
            left++;
        }
        set.add(s[right]);

        let current = s.slice(left, right + 1);
        if (current.length > best.length) {
            best = current;
        }
    }

    return best;
}

console.log(longestSubstring("abcabcbb"));