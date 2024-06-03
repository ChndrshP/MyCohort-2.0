
char **get_document(char *text, int *num_paragraphs) {
    char **paragraphs = NULL, *token;
    int count = 0;

    token = strtok(text, "\n");
    while (token) {
        paragraphs = realloc(paragraphs, (++count) * sizeof(char *));
        paragraphs[count - 1] = strdup(token);
        token = strtok(NULL, "\n");
    }

    *num_paragraphs = count;
    return paragraphs;
}

char *get_paragraph(char *document, int paragraph_index) {
    char *paragraph = NULL;
    int i = 0, count = 0;

    while (count < paragraph_index && document[i]) {
        if (document[i++] == '\n')
            count++;
    }

    if (count != paragraph_index)
        return NULL;

    for (int j = i; document[j] && document[j] != '\n'; j++) {
        paragraph = realloc(paragraph, j - i + 2);
        paragraph[j - i + 1] = '\0';
        paragraph[j - i] = document[j];
    }
    return paragraph;
}

char *get_sentence(char *paragraph, int sentence_index) {
    char *sentence = NULL, *token;
    int count = 0;

    token = strtok(paragraph, ".");
    while (token) {
        if (count == sentence_index) {
            sentence = strdup(token);
            break;
        }
        count++;
        token = strtok(NULL, ".");
    }
    return sentence;
}

char *get_word(char *sentence, int word_index) {
    char *word = NULL, *token;
    int count = 0;

    token = strtok(sentence, " ");
    while (token) {
        if (count == word_index) {
            word = strdup(token);
            break;
        }
        count++;
        token = strtok(NULL, " ");
    }
    return word;
}