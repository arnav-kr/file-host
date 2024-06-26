var abap_tm_language = {
  "fileTypes": [
    "abap",
    "ABAP"
  ],
  "foldingStartMarker": "/\\*\\*|\\{\\s*$",
  "foldingStopMarker": "\\*\\*/|^\\s*\\}",
  "keyEquivalent": "^~A",
  "name": "abap",
  "patterns": [
    {
      "captures": {
        "1": {
          "name": "punctuation.definition.comment.abap"
        }
      },
      "match": "^\\*.*\\n?",
      "name": "comment.line.full.abap"
    },
    {
      "captures": {
        "1": {
          "name": "punctuation.definition.comment.abap"
        }
      },
      "match": "\".*\\n?",
      "name": "comment.line.partial.abap"
    },
    {
      "match": "(?<![^\\s])##.*?(?=([\\.:,\\s]))",
      "name": "comment.line.pragma.abap"
    },
    {
      "match": "(?i)(?<=(?:^|\\s|~|->|-|=>))([a-z_/][a-z_0-9/]*)(?=\\s+(?:=|\\+=|-=|\\*=|\\/=|&&=)\\s+)",
      "name": "variable.other.abap"
    },
    {
      "match": "\\b[0-9]+(\\b|\\.|,)",
      "name": "constant.numeric.abap"
    },
    {
      "match": "(?ix)(^|\\s+)((PUBLIC|PRIVATE|PROTECTED)\\sSECTION)(?=\\s+|:|\\.)",
      "name": "storage.modifier.class.abap"
    },
    {
      "begin": "(?<!\\\\)(\\|)(.*?)",
      "end": "(?<!\\\\)(\\|)",
      "name": "string.interpolated.abap",
      "beginCaptures": {
        "1": {
          "name": "constant.character.escape.abap"
        }
      },
      "endCaptures": {
        "1": {
          "name": "constant.character.escape.abap"
        }
      },
      "patterns": [
        {
          "match": "({ )|( })",
          "name": "constant.character.escape"
        },
        {
          "match": "(?<={ ).*?(?= })",
          "name": "variable.other.abap"
        },
        {
          "match": "\\\\\\|",
          "name": "constant.character.escape.abap"
        }
      ]
    },
    {
      "begin": "'",
      "end": "'",
      "name": "string.quoted.single.abap",
      "patterns": [
        {
          "match": "''",
          "name": "constant.character.escape.abap"
        }
      ]
    },
    {
      "begin": "`",
      "end": "`",
      "name": "string.quoted.single.abap",
      "patterns": [
        {
          "match": "``",
          "name": "constant.character.escape.abap"
        }
      ]
    },
    {
      "begin": "(?i)^\\s*(class)\\s([a-z_/][a-z_0-9/]*)",
      "beginCaptures": {
        "1": {
          "name": "storage.type.block.abap"
        },
        "2": {
          "name": "entity.name.type.block.abap"
        }
      },
      "end": "\\s*\\.\\s*\\n?",
      "name": "meta.block.begin.implementation.abap",
      "patterns": [
        {
          "match": "(?ix)(^|\\s+)(definition|implementation|public|inheriting\\s+from|final|deferred|abstract|shared\\s+memory\\s+enabled|(global|local)*\\s*friends|(create\\s+(public|protected|private))|for\\s+testing|risk\\s+level\\s+(critical|dangerous|harmless))|duration\\s(short|medium|long)(?=\\s+|\\.)",
          "name": "storage.modifier.class.abap"
        },
        {
          "begin": "(?=[A-Za-z_][A-Za-z0-9_]*)",
          "contentName": "entity.name.type.block.abap",
          "end": "(?![A-Za-z0-9_])",
          "patterns": [
            {
              "include": "#generic_names"
            }
          ]
        }
      ]
    },
    {
      "begin": "(?ix)^\\s*(method)\\s(?:([a-z_\\/][a-z_0-9\\/]*)~)?([a-z_\\/][a-z_0-9\\/]*)",
      "beginCaptures": {
        "1": {
          "name": "storage.type.block.abap"
        },
        "2": {
          "name": "entity.name.type.abap"
        },
        "3": {
          "name": "entity.name.function.abap"
        }
      },
      "end": "\\s*\\.\\s*\\n?",
      "patterns": [
        {
          "match": "(?ix)(?<=^|\\s)(BY\\s+DATABASE(\\s+PROCEDURE|\\s+FUNCTION))(?=\\s+|\\.)",
          "name": "storage.modifier.method.abap"
        },
        {
          "match": "(?ix)(?<=^|\\s)(FOR\\s+(HDB|LLANG))(?=\\s+|\\.)",
          "name": "storage.modifier.method.abap"
        },
        {
          "match": "(?ix)(?<=\\s)(OPTIONS\\s+(READ-ONLY|DETERMINISTIC|SUPPRESS\\s+SYNTAX\\s+ERRORS))(?=\\s+|\\.)",
          "name": "storage.modifier.method.abap"
        },
        {
          "match": "(?ix)(?<=^|\\s)(LANGUAGE\\s+SQLSCRIPT)(?=\\s+|\\.)",
          "name": "storage.modifier.method.abap"
        },
        {
          "match": "(?ix)(?<=\\s)(USING)\\s+([a-z_\\/][a-z_0-9\\/]*)+(?=\\s+|\\.)",
          "captures": {
            "1": {
              "name": "storage.modifier.method.abap"
            }
          }
        },
        {
          "begin": "(?=[A-Za-z_][A-Za-z0-9_]*)",
          "end": "(?![A-Za-z0-9_])",
          "patterns": [
            {
              "include": "#generic_names"
            }
          ]
        }
      ]
    },
    {
      "begin": "(?ix)^\\s*(INTERFACE)\\s([a-z_\\/][a-z_0-9\\/]*)",
      "beginCaptures": {
        "1": {
          "name": "storage.type.block.abap"
        },
        "2": {
          "name": "entity.name.type.abap"
        }
      },
      "end": "\\s*\\.\\s*\\n?",
      "patterns": [
        {
          "match": "(?ix)(?<=^|\\s)(DEFERRED|PUBLIC)(?=\\s+|\\.)",
          "name": "storage.modifier.method.abap"
        }
      ]
    },
    {
      "begin": "(?ix)^\\s*(FORM)\\s([a-z_\\/][a-z_0-9\\/]*)",
      "beginCaptures": {
        "1": {
          "name": "storage.type.block.abap"
        },
        "2": {
          "name": "entity.name.type.abap"
        }
      },
      "end": "\\s*\\.\\s*\\n?",
      "patterns": [
        {
          "match": "(?ix)(?<=^|\\s)(USING|TABLES|CHANGING|RAISING)(?=\\s+|\\.)",
          "name": "storage.modifier.form.abap"
        },
        {
          "include": "#abaptypes"
        }
      ]
    },
    {
      "match": "(?i)(endclass|endmethod|endform|endinterface)",
      "name": "storage.type.block.end.abap"
    },
    {
      "match": "(?i)(<[A-Za-z_][A-Za-z0-9_]*>)",
      "name": "variable.other.field.symbol.abap"
    },
    {
      "include": "#keywords"
    },
    {
      "include": "#abap_constants"
    },
    {
      "include": "#reserved_names"
    },
    {
      "include": "#operators"
    },
    {
      "include": "#builtin_functions"
    },
    {
      "include": "#abaptypes"
    },
    {
      "include": "#system_fields"
    }
  ],
  "repository": {
    "abap_constants": {
      "match": "(?ix)(?<=\\s)(initial|null|space|abap_true|abap_false|table_line)(?=\\s|\\.|,)",
      "name": "constant.language.abap"
    },
    "reserved_names": {
      "match": "(?ix)(?<=\\s)(me|super)(?=\\s|\\.|,|->)",
      "name": "constant.language.abap"
    },
    "abaptypes": {
      "patterns": [
        {
          "match": "(?ix)\\s(abap_bool|string|xstring|any|clike|csequence|numeric|xsequence|c|n|i|p|f|d|t|x)(?=\\s|\\.|,)",
          "name": "support.type.abap"
        },
        {
          "match": "(?ix)\\s(TYPE|REF|TO|STANDARD|SORTED|HASHED|INDEX|TABLE|WITH|UNIQUE|NON-UNIQUE|SECONDARY|DEFAULT|KEY)(?=\\s|\\.|,)",
          "name": "keyword.control.simple.abap"
        }
      ]
    },
    "arithmetic_operator": {
      "match": "(?i)(?<=\\s)(\\+|\\-|\\*|\\*\\*|/|%|DIV|MOD|BIT-AND|BIT-OR|BIT-XOR|BIT-NOT)(?=\\s)",
      "name": "keyword.control.simple.abap"
    },
    "comparison_operator": {
      "match": "(?i)(?<=\\s)(<|>|<\\=|>\\=|\\=|<>|eq|ne|lt|le|gt|ge|cs|cp)(?=\\s)",
      "name": "keyword.control.simple.abap"
    },
    "control_keywords": {
      "match": "(?ix)(^|\\s)(\n\t        at|case|catch|continue|do|elseif|else|endat|endcase|enddo|endif|\n\t        endloop|endon|if|loop|on|raise|try)(?=\\s|\\.|:)",
      "name": "keyword.control.flow.abap"
    },
    "generic_names": {
      "match": "[A-Za-z_][A-Za-z0-9_]*"
    },
    "keywords": {
      "patterns": [
        {
          "include": "#main_keywords"
        },
        {
          "include": "#text_symbols"
        },
        {
          "include": "#control_keywords"
        },
        {
          "include": "#keywords_followed_by_braces"
        }
      ]
    },
    "logical_operator": {
      "match": "(?i)(?<=\\s)(not|or|and)(?=\\s)",
      "name": "keyword.control.simple.abap"
    },
    "system_fields": {
      "match": "(?ix)\\b(sy)-(abcde|batch|binpt|calld|callr|colno|cpage|cprog|cucol|curow|datar|datlo|datum|dayst|dbcnt|dbnam|dbsysc|dyngr|dynnr|fdayw|fdpos|host|index|langu|ldbpg|lilli|linct|linno|linsz|lisel|listi|loopc|lsind|macol|mandt|marow|modno|msgid|msgli|msgno|msgty|msgv[1-4]|opsysc|pagno|pfkey|repid|saprl|scols|slset|spono|srows|staco|staro|stepl|subrc|sysid|tabix|tcode|tfill|timlo|title|tleng|tvar[0-9]|tzone|ucomm|uline|uname|uzeit|vline|wtitl|zonlo)(?=\\.|\\s)",
      "captures": {
        "1": {
          "name": "variable.language.abap"
        },
        "2": {
          "name": "variable.language.abap"
        }
      }
    },
    "main_keywords": {
      "match": "(?ix)(?<=^|\\s)(\n\t        abstract|access|add|add-corresponding|adjacent|alias|aliases|all|append|appending|ascending|as|assert|assign|assigned|assigning|association|authority-check|\n\t        back|badi|begin|binary|block|bound|break-point|by|byte|\n\t        call|cast|changing|check|checkbox|class-data|class-events|class-method|class-methods|class-pool|clear|close|cnt|collect|commit|comment|cond|character|\n\t        corresponding|communication|comparing|component|compute|concatenate|condense|constants|conv|count|\n\t        controls|convert|create|currency|\n\t        data|descending|default|define|deferred|delete|describe|destination|detail|display|divide|divide-corresponding|display-mode|distinct|duplicates|\n\t        deleting|\n\t        editor-call|empty|end|endexec|endfunction|ending|endmodule|end-of-definition|end-of-page|end-of-selection|end-test-injection|end-test-seam|exit-command|\n\t        endprovide|endselect|endtry|endwhile|enum|event|events|excluding|exec|exit|export|\n\t        exporting|extract|exception|exceptions|\n\t        field-symbols|field-groups|field|first|fetch|fields|format|frame|free|from|function|find|for|found|function-pool|\n\t        generate|get|\n\t        handle|handler|hide|hashed|header|help-request|\n\t        include|import|importing|index|infotypes|initial|initialization|\n\t\t\t\t\tid|implemented|is|in|inner|interface|interfaces|interface-pool|intervals|init|input|insert|instance|into|\n\t\t\t\t\tjoin|\n\t\t\tkey|\n\t        left-justified|leave|like|line|lines|line-count|line-size|list-processing|load|local|log-point|length|left|leading|lower|\n\t        matchcode|memory|method|mesh|message|message-id|methods|modify|module|move|move-corresponding|multiply|multiply-corresponding|match|modif|\n\t\t\tnew|new-line|new-page|new-section|next|no|no-display|no-gap|no-gaps|no-sign|no-zero|non-unique|number|\n\t        occurrence|object|obligatory|of|output|overlay|optional|others|occurrences|occurs|offset|options|\n\t        pack|parameter|parameters|partially|perform|pf-status|places|position|print-control|private|privileged|program|protected|provide|public|put|\n\t        radiobutton\\s+group|raising|range|ranges|receive|receiving|redefinition|reduce|reference|refresh|regex|reject|results|requested|\n\t        ref|replace|report|reserve|restore|result\\s+xml|return|returning|right-justified|rollback|read|read-only|rp-provide-from-last|run|\n\t        scan|screen|scroll|search|select|select-options|selection-screen|set|stamp|source|subkey|\n\t        separated|set|shift|single|skip|sort|sorted|split|standard|stamp|starting|start-of-selection|sum|subtract-corresponding|statics|step|stop|structure|submatches|submit|subtract|summary|supplied|suppress|section|syntax-check|syntax-trace|system-call|switch|\n\t        tables|table|task|testing|test-seam|test-injection|then|time|times|title|titlebar|to|top-of-page|trailing|transaction|transfer|transformation|translate|transporting|types|type|type-pool|type-pools|\n\t        unassign|unique|uline|union|unpack|update|upper|using|user-command|\n\t        value|value-request|\n\t        when|while|window|write|where|with|work|\n\t\txml)(?=\\s|\\.|:|,)",
      "name": "keyword.control.simple.abap"
    },
    "text_symbols": {
      "match": "(?ix)(?<=^|\\s)(text)-([A-Z0-9]{1,3})(?=\\s|\\.|:|,)",
      "captures": {
        "1": {
          "name": "keyword.control.simple.abap"
        },
        "2": {
          "name": "constant.numeric.abap"
        }
      }
    },
    "keywords_followed_by_braces": {
      "match": "(?ix)\\b(data|value|field-symbol)\\((<?[a-z_\\/][a-z_0-9\\/]*>?)\\)",
      "captures": {
        "1": {
          "name": "keyword.control.simple.abap"
        },
        "2": {
          "name": "variable.other.abap"
        }
      }
    },
    "operators": {
      "patterns": [
        {
          "include": "#other_operator"
        },
        {
          "include": "#arithmetic_operator"
        },
        {
          "include": "#comparison_operator"
        },
        {
          "include": "#logical_operator"
        }
      ]
    },
    "other_operator": {
      "match": "(?<=\\s)(&&|\\?=|\\+=|-=|\\/=|\\*=|&&=)(?=\\s)",
      "name": "keyword.control.simple.abap"
    },
    "builtin_functions": {
      "match": "(?ix)(?<=\\s)(abs|sign|ceil|floor|trunc|frac|acos|asin|atan|cos|sin|tan|cosh|sinh|tanh|exp|log|log10|sqrt|strlen|xstrlen|charlen|lines|numofchar|dbmaxlen|round|rescale|nmax|nmin|cmax|cmin|boolc|boolx|xsdbool|contains|contains_any_of|contains_any_not_of|matches|line_exists|ipow|char_off|count|count_any_of|count_any_not_of|distance|condense|concat_lines_of|escape|find|find_end|find_any_of|find_any_not_of|insert|match|repeat|replace|reverse|segment|shift_left|shift_right|substring|substring_after|substring_from|substring_before|substring_to|to_upper|to_lower|to_mixed|from_mixed|translate|bit-set|line_index)(?=\\()",
      "name": "entity.name.function.builtin.abap"
    }
  },
  "scopeName": "source.abap",
  "uuid": "0357FFB4-EFFF-4DE9-8371-B0F9C8DF1B21"
}
